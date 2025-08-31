import api from '../utils/api';

class CollaborationService {
  // Submit collaboration request
  async submitCollaborationRequest(formData) {
    try {
      const response = await api.post('/collaborate/submit', {
        fullName: formData.fullName,
        organizationName: formData.organizationName,
        email: formData.email,
        mobile: formData.mobile,
        areaOfInterest: formData.areaOfInterest,
        message: formData.message,
      });
      
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get all collaborations (Admin only)
  async getAllCollaborations(params = {}) {
    try {
      const { page = 1, limit = 10, status, areaOfInterest, organizationType, search } = params;
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(status && { status }),
        ...(areaOfInterest && { areaOfInterest }),
        ...(organizationType && { organizationType }),
        ...(search && { search }),
      });

      const response = await api.get(`/collaborate/all?${queryParams}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Update collaboration status (Admin only)
  async updateCollaborationStatus(collaborationId, status, organizationType, partnershipType, priority, declineReason, reviewedBy, notes, meetingDate, partnershipStartDate) {
    try {
      const response = await api.patch(`/collaborate/${collaborationId}/status`, { 
        status, 
        organizationType,
        partnershipType,
        priority,
        declineReason,
        reviewedBy,
        notes,
        meetingDate,
        partnershipStartDate
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

export default new CollaborationService();