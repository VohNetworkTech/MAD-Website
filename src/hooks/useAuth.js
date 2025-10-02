// src/hooks/useAuth.jsx
import { useState, useContext, createContext, useEffect } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load and verify user on mount
  useEffect(() => {
    const initAuth = async () => {
      try {
        const currentUser = authService.getCurrentUser();
        
        if (currentUser) {
          // Verify token is still valid
          const verifiedUser = await authService.verifyToken();
          setUser(verifiedUser);
        }
      } catch (error) {
        console.error('Auth initialization failed:', error);
        authService.logout();
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const userData = await authService.signin(credentials);
      setUser(userData);
      return userData;
    } catch (error) {
      throw error;
    }
  };

  const signup = async (userData) => {
    try {
      const newUser = await authService.signup(userData);
      setUser(newUser);
      return newUser;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading,
    isAuthenticated: !!user,
    role: user?.role || null,
    hasRole: (requiredRole) => user?.role === requiredRole
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};