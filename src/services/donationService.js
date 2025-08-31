import api from '../utils/api';

class DonationService {
  // Submit donation form
  async submitDonationForm(formData) {
    try {
      const response = await api.post('/donation/submit', {
        fullName: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        donationAmount: formData.donationAmount,
        donationType: formData.donationType,
        message: formData.message,
      });
      
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get all donations (Admin only)
  async getAllDonations(params = {}) {
    try {
      const { page = 1, limit = 10, status, donationType, search } = params;
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(status && { status }),
        ...(donationType && { donationType }),
        ...(search && { search }),
      });

      const response = await api.get(`/donation/all?${queryParams}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Update donation status (Admin only)
  async updateDonationStatus(donationId, status, paymentStatus) {
    try {
      const response = await api.patch(`/donation/${donationId}/status`, { 
        status, 
        paymentStatus 
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

export default new DonationService();