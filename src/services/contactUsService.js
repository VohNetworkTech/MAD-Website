import api from '../utils/api';

class ContactUsService {
  // Submit contact us form
  async submitContactUs(formData) {
    try {
      const response = await api.post('/contactus/submit', {
        fullName: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        subject: formData.subject,
        message: formData.message,
      });
      
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get all contact us submissions (Admin only)
  async getAllContactUs(params = {}) {
    try {
      const { page = 1, limit = 10, status, subject, priority, search } = params;
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(status && { status }),
        ...(subject && { subject }),
        ...(priority && { priority }),
        ...(search && { search }),
      });

      const response = await api.get(`/contactus/all?${queryParams}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Update contact us status (Admin only)
  async updateContactUsStatus(contactId, status, priority, assignedTo, notes) {
    try {
      const response = await api.patch(`/contactus/${contactId}/status`, { 
        status, 
        priority,
        assignedTo,
        notes
      });
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

export default new ContactUsService();