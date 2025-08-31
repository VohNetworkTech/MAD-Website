// src/services/contactService.js
import api from '../utils/api';

class ContactService {
  // Submit contact form
  async submitContactForm(formData) {
    try {
      const response = await api.post('/contact/submit', {
        fullName: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
      });
      
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get all contacts (Admin only)
  async getAllContacts(params = {}) {
    try {
      const { page = 1, limit = 10, status, search } = params;
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(status && { status }),
        ...(search && { search }),
      });

      const response = await api.get(`/contact/all?${queryParams}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Update contact status (Admin only)
  async updateContactStatus(contactId, status) {
    try {
      const response = await api.patch(`/contact/${contactId}/status`, { status });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Handle API errors
  handleError(error) {
    const message = error.response?.data?.message || 
                   error.message || 
                   'An unexpected error occurred';
    
    return {
      message,
      status: error.response?.status,
      data: error.response?.data,
    };
  }
}

export default new ContactService();