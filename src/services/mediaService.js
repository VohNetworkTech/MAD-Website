import api from '../utils/api';

class MediaService {
  // Submit media upload
  async submitMediaUpload(formData) {
    try {
      const response = await api.post('/media/submit', {
        fullName: formData.fullName,
        email: formData.email,
        mediaUrl: formData.mediaUrl,
        description: formData.description,
      });
      
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get all media submissions (Admin only)
  async getAllSubmissions(params = {}) {
    try {
      const { page = 1, limit = 10, status, search, mediaType } = params;
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(status && { status }),
        ...(search && { search }),
        ...(mediaType && { mediaType }),
      });

      const response = await api.get(`/media/submissions?${queryParams}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Update media submission status (Admin only)
  async updateSubmissionStatus(submissionId, status, category, rejectionReason, reviewedBy) {
    try {
      const response = await api.patch(`/media/${submissionId}/status`, { 
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

  // Get media submission by ID
  async getSubmissionById(submissionId) {
    try {
      const response = await api.get(`/media/${submissionId}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Delete media submission (Admin only)
  async deleteSubmission(submissionId) {
    try {
      const response = await api.delete(`/media/${submissionId}`);
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

export default new MediaService();