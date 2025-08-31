import api from '../utils/api';

class VolunteerService {
  // Register volunteer
  async registerVolunteer(formData) {
    try {
      const response = await api.post('/volunteer/register', {
        fullName: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        expertise: formData.expertise,
        howToHelp: formData.howToHelp,
        message: formData.message,
      });
      
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get all volunteers (Admin only)
  async getAllVolunteers(params = {}) {
    try {
      const { page = 1, limit = 10, status, expertise, search } = params;
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(status && { status }),
        ...(expertise && { expertise }),
        ...(search && { search }),
      });

      const response = await api.get(`/volunteer/all?${queryParams}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Update volunteer status (Admin only)
  async updateVolunteerStatus(volunteerId, status, availability, rejectionReason, reviewedBy, notes) {
    try {
      const response = await api.patch(`/volunteer/${volunteerId}/status`, { 
        status, 
        availability,
        rejectionReason,
        reviewedBy,
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

export default new VolunteerService();