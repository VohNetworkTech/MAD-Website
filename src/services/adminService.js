// src/services/adminService.js
import api from '../utils/api'; // Import your existing axios instance

class AdminService {
  // Generic API call method using your axios instance
  async apiCall(endpoint, options = {}) {
    try {
      const response = await api({
        url: endpoint,
        ...options
      });
      
      return response.data;
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  }

  // Contact related methods (different from ContactUs)
  async getAllContactSubmissions(filters = {}) {
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });
    
    return this.apiCall(`/contact/all?${queryParams}`);
  }

  async getContactSubmission(id) {
    return this.apiCall(`/contact/${id}`);
  }

  async updateContactStatus(id, status) {
    return this.apiCall(`/contact/${id}/status`, {
      method: 'PATCH',
      data: { status }
    });
  }

  async deleteContactSubmission(id) {
    return this.apiCall(`/contact/${id}`, {
      method: 'DELETE'
    });
  }

  // ContactUs related methods (existing - different API)
  async getAllContactUsSubmissions(filters = {}) {
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });
    
    return this.apiCall(`/contactUs/all?${queryParams}`);
  }

  async getContactUsSubmission(id) {
    return this.apiCall(`/contactUs/${id}`);
  }

  async updateContactUsSubmissionStatus(id, status) {
    return this.apiCall(`/contactUs/${id}/status`, {
      method: 'PATCH',
      data: { status }
    });
  }

  async deleteContactUsSubmission(id) {
    return this.apiCall(`/contactsUs/${id}`, {
      method: 'DELETE'
    });
  }

  // Internship related methods
  async getAllInternshipApplications(filters = {}) {
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });
    
    return this.apiCall(`/intern/all?${queryParams}`);
  }

  async getInternshipApplication(id) {
    return this.apiCall(`/intern/${id}`);
  }

  async updateInternshipStatus(id, updateData) {
    return this.apiCall(`/intern/${id}/status`, {
      method: 'PATCH',
      data: updateData
    });
  }

  async deleteInternshipApplication(id) {
    return this.apiCall(`/intern/${id}`, {
      method: 'DELETE'
    });
  }

   async getAllUsers(filters = {}) {
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });
    
    return this.apiCall(`/auth/users?${queryParams}`);
  }

  async getUser(id) {
    return this.apiCall(`/auth/users/${id}`);
  }

  async updateUserRole(id, role) {
    return this.apiCall(`/auth/users/${id}/role`, {
      method: 'PATCH',
      data: { role }
    });
  }

  async deleteUser(id) {
    return this.apiCall(`/auth/users/${id}`, {
      method: 'DELETE'
    });
  }


  // Volunteer related methods (to be implemented when backend is ready)
  async getAllVolunteerApplications(filters = {}) {
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });
    
    return this.apiCall(`/volunteer/all?${queryParams}`);
  }

  async getVolunteerApplication(id) {
    return this.apiCall(`/volunteer/${id}`);
  }

  async updateVolunteerStatus(id, updateData) {
    return this.apiCall(`/volunteer/${id}/status`, {
      method: 'PATCH',
      data: updateData
    });
  }

  async deleteVolunteerApplication(id) {
    return this.apiCall(`/volunteer/${id}`, {
      method: 'DELETE'
    });
  }


  // Donation related methods
  async getAllDonationSubmissions(filters = {}) {
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });
    
    return this.apiCall(`/donation/all?${queryParams}`);
  }

  async getDonationSubmission(id) {
    return this.apiCall(`/donation/${id}`);
  }

  async updateDonationStatus(id, status) {
    return this.apiCall(`/donation/${id}/status`, {
      method: 'PATCH',
      data: { status }
    });
  }

  async deleteDonationSubmission(id) {
    return this.apiCall(`/donation/${id}`, {
      method: 'DELETE'
    });
  }

  // Event Registration related methods
  async getAllEventRegistrations(filters = {}) {
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });
    
    return this.apiCall(`/event/registrations?${queryParams}`);
  }

  async getEventRegistration(id) {
    return this.apiCall(`/event/registrations/${id}`);
  }

  async updateEventRegistrationStatus(id, updateData) {
    return this.apiCall(`/event/registration/${id}/status`, {
      method: 'PATCH',
      data: updateData
    });
  }

  async deleteEventRegistration(id) {
    return this.apiCall(`/events/registrations/${id}`, {
      method: 'DELETE'
    });
  }

  // Collaboration related methods
  async getAllCollaborationSubmissions(filters = {}) {
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });
    
    return this.apiCall(`/collaborate/all?${queryParams}`);
  }

  async getCollaborationSubmission(id) {
    return this.apiCall(`/collaborate/${id}`);
  }

  async updateCollaborationStatus(id, updateData) {
    return this.apiCall(`/collaborate/${id}/status`, {
      method: 'PATCH',
      data: updateData
    });
  }

  async deleteCollaborationSubmission(id) {
    return this.apiCall(`/collaborate/${id}`, {
      method: 'DELETE'
    });
  }

  // Newsletter related methods
  async getAllNewsletterSubscribers(filters = {}) {
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });
    
    return this.apiCall(`/newsletter/subscribers?${queryParams}`);
  }

  async getNewsletterSubscriber(id) {
    return this.apiCall(`/newsletter/subscribers/${id}`);
  }

  async updateSubscriberStatus(id, status) {
    return this.apiCall(`/newsletter/subscribers/${id}/status`, {
      method: 'PATCH',
      data: { status }
    });
  }

  async deleteNewsletterSubscriber(id) {
    return this.apiCall(`/newsletter/subscribers/${id}`, {
      method: 'DELETE'
    });
  }

  // Media related methods (to be implemented when backend is ready)
  async getAllMediaRequests(filters = {}) {
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });
    
    return this.apiCall(`/media/all?${queryParams}`);
  }

  // Dashboard stats
  async getDashboardStats() {
    return this.apiCall('/contactsus/stats');
  }

  // Export functionality
  async exportSubmissions(type, format = 'csv') {
    try {
      const response = await api({
        url: `/contactsus/export`,
        method: 'GET',
        params: { format },
        responseType: 'blob' // Important for file downloads
      });

      return response.data;
    } catch (error) {
      console.error('Export failed:', error);
      throw error;
    }
  }
}

// Create and export a singleton instance
const adminService = new AdminService();
export default adminService;