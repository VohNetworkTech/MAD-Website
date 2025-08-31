import api from '../utils/api';

class NewsService {
  // Submit news update
  async submitNewsUpdate(formData) {
    try {
      const response = await api.post('/news/submit', {
        fullName: formData.fullName,
        email: formData.email,
        newsUpdate: formData.newsUpdate,
      });
      
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get all news submissions (Admin only)
  async getAllSubmissions(params = {}) {
    try {
      const { page = 1, limit = 10, status, search } = params;
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(status && { status }),
        ...(search && { search }),
      });

      const response = await api.get(`/news/submissions?${queryParams}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Update news submission status (Admin only)
  async updateSubmissionStatus(submissionId, status, category, rejectionReason, reviewedBy) {
    try {
      const response = await api.patch(`/news/${submissionId}/status`, { 
        status, 
        category,
        rejectionReason,
        reviewedBy
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

export default new NewsService();