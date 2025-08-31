// src/services/newsletterService.js
import api from '../utils/api';

class NewsletterService {
  // Subscribe to newsletter
  async subscribe(email) {
    try {
      const response = await api.post('/newsletter/subscribe', { email });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Unsubscribe from newsletter (for admin or direct links)
  async unsubscribe(token) {
    try {
      const response = await api.get(`/newsletter/unsubscribe/${token}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get all subscribers (Admin only)
  async getAllSubscribers(params = {}) {
    try {
      const { page = 1, limit = 10, status, search } = params;
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(status && { status }),
        ...(search && { search }),
      });

      const response = await api.get(`/newsletter/subscribers?${queryParams}`);
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

export default new NewsletterService();