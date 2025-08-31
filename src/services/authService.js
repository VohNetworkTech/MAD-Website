import api from '../utils/api';

class AuthService {
  // Sign up user
  async signup(userData) {
    try {
      const response = await api.post('/auth/signup', {
        name: userData.fullName || userData.username,
        email: userData.email,
        phoneNumber: userData.phone,
        password: userData.password,
      });
      
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Sign in user
  async signin(credentials) {
    try {
      const response = await api.post('/auth/login', {
        email: credentials.username, // Assuming username can be email
        password: credentials.password,
      });
      
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Forgot password
  async forgotPassword(email) {
    try {
      const response = await api.post('/auth/forgot-password', { email });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Logout user
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }

  // Get current user
  getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!localStorage.getItem('authToken');
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

export default new AuthService();