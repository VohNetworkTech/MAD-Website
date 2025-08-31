import api from '../utils/api';

class InternService {
  // Apply for internship
  async applyInternship(formData) {
    try {
      const response = await api.post('/intern/apply', {
        fullName: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        internshipArea: formData.internshipArea,
        education: formData.education,
        motivation: formData.motivation,
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

export default new InternService();
