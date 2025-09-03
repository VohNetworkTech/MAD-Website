// services/eventRegistrationService.js
import api from '../utils/api';

class EventRegistrationService {
  // Submit event registration
  async submitEventRegistration(formData) {
    try {
      // Validate required fields before making API call
      this.validateRegistrationData(formData);
      
      const payload = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        mobileNumber: formData.mobileNumber.trim(),
        city: formData.city?.trim() || '',
        occupation: formData.occupation?.trim() || '',
        organization: formData.organization?.trim() || '',
        isPersonWithDisability: formData.isPersonWithDisability,
        disabilityType: formData.disabilityType || null,
        otherDisabilityText: formData.otherDisabilityText?.trim() || null,
        eventId: formData.eventId,
        eventTitle: formData.eventTitle,
        registrationDate: new Date().toISOString(),
        registrationStatus: 'pending' // Default status
      };

      // Log payload for debugging
      console.log('Submitting registration payload:', payload);
      
      const response = await api.post('/event/register', payload);
      
      if (response.data) {
        return {
          success: true,
          message: response.data.message || 'Registration submitted successfully',
          registrationReference: response.data.registrationReference || response.data.referenceId,
          eventTitle: formData.eventTitle,
          data: response.data
        };
      } else {
        throw new Error('No data received from server');
      }
      
    } catch (error) {
      console.error('Registration submission error:', error);
      throw this.handleError(error);
    }
  }

  // Validate registration data before submission
  validateRegistrationData(formData) {
    const errors = [];
    
    if (!formData.fullName?.trim()) {
      errors.push('Full name is required');
    }
    
    if (!formData.email?.trim()) {
      errors.push('Email is required');
    } else if (!this.isValidEmail(formData.email.trim())) {
      errors.push('Valid email address is required');
    }
    
    if (!formData.mobileNumber?.trim()) {
      errors.push('Mobile number is required');
    } else if (!this.isValidMobileNumber(formData.mobileNumber.trim())) {
      errors.push('Valid 10-digit mobile number is required');
    }
    
    if (!formData.isPersonWithDisability) {
      errors.push('Disability status is required');
    }
    
    if (formData.isPersonWithDisability === 'Yes') {
      if (!formData.disabilityType) {
        errors.push('Disability type is required');
      }
      
      if (formData.disabilityType === 'Other (please specify)' && !formData.otherDisabilityText?.trim()) {
        errors.push('Please specify the disability type');
      }
    }
    
    if (!formData.eventId) {
      errors.push('Event ID is required');
    }
    
    if (errors.length > 0) {
      throw new Error(errors.join(', '));
    }
  }

  // Email validation helper
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Mobile number validation helper (Indian format)
  isValidMobileNumber(mobile) {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
  }

  // Check if user is already registered for event
  async checkExistingRegistration(email, eventId) {
    try {
      const response = await api.post('/events/check-registration', {
        email: email.trim().toLowerCase(),
        eventId
      });
      return response.data;
    } catch (error) {
      // If endpoint returns 404, user is not registered
      if (error.response?.status === 404) {
        return { isRegistered: false };
      }
      throw this.handleError(error);
    }
  }

  // Get registration by reference ID (for user lookup)
  async getRegistrationByReference(referenceId) {
    try {
      const response = await api.get(`/events/registration/reference/${referenceId}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get all event registrations (Admin only)
  async getAllRegistrations(params = {}) {
    try {
      const { page = 1, limit = 10, eventId, registrationStatus, search } = params;
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(eventId && { eventId }),
        ...(registrationStatus && { registrationStatus }),
        ...(search && { search }),
      });

      const response = await api.get(`/events/registrations?${queryParams}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get event statistics (Admin only)
  async getEventStats(eventId) {
    try {
      const response = await api.get(`/events/${eventId}/stats`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Update registration status (Admin only)
  async updateRegistrationStatus(registrationId, status, notes = '') {
    try {
      const response = await api.patch(`/events/registration/${registrationId}/status`, { 
        registrationStatus: status,
        notes: notes.trim(),
        updatedAt: new Date().toISOString()
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get user's registrations
  async getUserRegistrations(email) {
    try {
      const response = await api.get(`/events/user-registrations?email=${encodeURIComponent(email)}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Cancel registration
  async cancelRegistration(registrationId, reason = '') {
    try {
      const response = await api.patch(`/events/registration/${registrationId}/cancel`, {
        reason: reason.trim(),
        cancelledAt: new Date().toISOString()
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Resend confirmation email
  async resendConfirmationEmail(registrationId) {
    try {
      const response = await api.post(`/events/registration/${registrationId}/resend-confirmation`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Handle API errors
  handleError(error) {
    console.error('EventRegistrationService error:', error);
    
    let message = 'An unexpected error occurred';
    let errors = [];
    let status = null;
    
    if (error.response) {
      // Server responded with error status
      status = error.response.status;
      const data = error.response.data;
      
      switch (status) {
        case 400:
          message = data.message || 'Invalid request data';
          errors = data.errors || [];
          break;
        case 401:
          message = 'Authentication required';
          break;
        case 403:
          message = 'Access denied';
          break;
        case 404:
          message = 'Resource not found';
          break;
        case 409:
          message = data.message || 'Registration already exists';
          break;
        case 422:
          message = data.message || 'Validation error';
          errors = data.errors || [];
          break;
        case 429:
          message = 'Too many requests. Please try again later.';
          break;
        case 500:
          message = 'Server error. Please try again later.';
          break;
        default:
          message = data.message || `Server error (${status})`;
      }
    } else if (error.request) {
      // Network error
      message = 'Network error. Please check your connection and try again.';
    } else {
      // Other error
      message = error.message || 'An unexpected error occurred';
    }
    
    return {
      message,
      status,
      errors,
      data: error.response?.data,
    };
  }

  // Helper method to generate registration reference
  generateRegistrationReference() {
    const prefix = 'REG';
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substr(2, 6).toUpperCase();
    return `${prefix}${timestamp}${random}`;
  }
}

export default new EventRegistrationService();