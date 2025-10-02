// src/components/common/AuthModal.jsx
// Only the handleSubmit function needs updating - rest stays the same

import React, { useState } from 'react';
import { X, User, Mail, Phone, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
  validateUsername,
  validateConfirmPassword,
} from '../../utils/validation';

// InputField component stays exactly the same
const InputField = ({ 
  icon: Icon, 
  type, 
  name, 
  placeholder, 
  label, 
  required = false, 
  value, 
  onChange, 
  error, 
  showPassword, 
  onTogglePassword 
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && '*'}
    </label>
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full pl-10 ${type === 'password' ? 'pr-12' : 'pr-4'} py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        required={required}
      />
      {type === 'password' && onTogglePassword && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      )}
    </div>
    {error && (
      <p className="mt-1 text-sm text-red-600 flex items-center">
        <AlertCircle className="w-4 h-4 mr-1" />
        {error}
      </p>
    )}
  </div>
);

const AuthModal = ({ isOpen, onClose, mode, setMode }) => {
  const { login, signup, user } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};
    
    if (mode === 'register') {
      newErrors.username = validateUsername(formData.username);
      newErrors.email = validateEmail(formData.email);
      newErrors.phone = validatePhoneNumber(formData.phone);
      newErrors.password = validatePassword(formData.password);
      newErrors.confirmPassword = validateConfirmPassword(formData.password, formData.confirmPassword);
    } else {
      if (!formData.username) newErrors.username = 'Username or email is required';
      newErrors.password = validatePassword(formData.password);
    }
    
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key]) delete newErrors[key];
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // UPDATED handleSubmit with role-based navigation
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      let userData;
      
      if (mode === 'register') {
        userData = await signup(formData);
      } else {
        userData = await login({
          username: formData.username,
          password: formData.password,
        });
      }
      
      // Reset form
      setFormData({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        fullName: ''
      });
      setErrors({});
      onClose();
      
      // Navigate based on role
      if (userData?.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
      
    } catch (error) {
      setApiError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    if (apiError) {
      setApiError('');
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const resetForm = () => {
    setFormData({
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      fullName: ''
    });
    setErrors({});
    setApiError('');
  };

  const handleModeSwitch = () => {
    setMode(mode === 'signin' ? 'register' : 'signin');
    resetForm();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            {mode === 'signin' 
              ? 'Sign in to access your account' 
              : 'Join our community of changemakers'
            }
          </p>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {apiError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  <p className="text-sm text-red-700">{apiError}</p>
                </div>
              </div>
            )}

            <InputField
              icon={User}
              type="text"
              name="username"
              placeholder={mode === 'signin' ? 'Enter email' : 'Choose a username'}
              label={mode === 'signin' ? ' Email' : 'Username'}
              required
              value={formData.username}
              onChange={handleInputChange}
              error={errors.username}
            />

            {mode === 'register' && (
              <>
                <InputField
                  icon={Mail}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  label="Email Address"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                />

                <InputField
                  icon={Phone}
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  label="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                />
              </>
            )}

            <InputField
              icon={Lock}
              type="password"
              name="password"
              placeholder="Enter your password"
              label="Password"
              required
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
              showPassword={showPassword}
              onTogglePassword={handleTogglePassword}
            />

            {mode === 'register' && (
              <InputField
                icon={Lock}
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                label="Confirm Password"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                error={errors.confirmPassword}
                showPassword={showPassword}
                onTogglePassword={handleTogglePassword}
              />
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <span>{mode === 'signin' ? 'Sign In' : 'Create Account'}</span>
              )}
            </button>

            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-gray-600">
                {mode === 'signin' ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={handleModeSwitch}
                  className="text-blue-600 hover:text-blue-700 font-medium ml-1 transition-colors"
                >
                  {mode === 'signin' ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;