// src/services/authService.js
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
        // Store complete user data including role
        localStorage.setItem('user', JSON.stringify({
          ...response.data.user,
          token: response.data.token
        }));
      }
      
      return {
        ...response.data.user,
        token: response.data.token
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Sign in user
  async signin(credentials) {
    try {
      const response = await api.post('/auth/login', {
        email: credentials.username,
        password: credentials.password,
      });
      
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        // Store complete user data including role
        localStorage.setItem('user', JSON.stringify({
          ...response.data.user,
          token: response.data.token
        }));
      }
      
      return {
        ...response.data.user,
        token: response.data.token
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Verify token and get current user from backend
  async verifyToken() {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) return null;

      const response = await api.get('/auth/verify');
      
      // Update stored user data
      localStorage.setItem('user', JSON.stringify({
        ...response.data.user,
        token
      }));
      
      return {
        ...response.data.user,
        token
      };
    } catch (error) {
      // If token is invalid, clear storage
      this.logout();
      return null;
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

  // Check user role
  hasRole(requiredRole) {
    const user = this.getCurrentUser();
    return user?.role === requiredRole;
  }

  // Handle API errors
  handleError(error) {
    const message = error.response?.data?.message || 
                   error.message || 
                   'An unexpected error occurred';
    
    const err = new Error(message);
    err.status = error.response?.status;
    err.data = error.response?.data;
    
    return err;
  }
}

export default new AuthService();