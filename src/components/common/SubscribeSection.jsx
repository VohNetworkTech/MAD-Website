// src/components/newsletter/SubscribeSection.jsx
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Bell } from 'lucide-react';
import newsletterService from '../../services/newsletterService';

// Input field component outside main component to prevent cursor issues
const EmailInputField = ({ type, name, placeholder, value, onChange, error }) => {
  return (
    <div className="relative flex-1">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-4 pr-32 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white text-base ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        required
      />
      {error && (
        <p className="mt-2 text-sm text-red-600 flex items-center">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </p>
      )}
    </div>
  );
};

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [apiError, setApiError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    if (email.length > 254) return 'Email is too long';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    // Client-side validation
    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }

    setError('');
    setIsSubmitting(true);
    
    try {
      const response = await newsletterService.subscribe(email);
      
      if (response.success) {
        setIsSubmitted(true);
        setSubmitMessage(response.message);
        
        // Reset form after showing success message
        setTimeout(() => {
          setEmail('');
          setIsSubmitted(false);
          setSubmitMessage('');
        }, 4000);
      }
    } catch (error) {
      setApiError(error.message || 'Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    
    // Clear errors when user starts typing
    if (error) {
      setError('');
    }
    if (apiError) {
      setApiError('');
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Successfully Subscribed!</h3>
              <p className="text-gray-600 mb-4">
                {submitMessage || "Thank you for subscribing to our newsletter!"}
              </p>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-sm text-green-700">
                  You'll receive our latest updates and stories directly in your inbox.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subscribe for Updates
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Stay connected with our mission! Get the latest news, impact stories, and volunteer opportunities delivered to your inbox.
            </p>
          </div>

          {/* Subscription Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* API Error Display */}
              {apiError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                  <div className="flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    <p className="text-sm text-red-700">{apiError}</p>
                  </div>
                </div>
              )}

              {/* Email Input with Submit Button */}
              <div className="relative">
                <div className="flex flex-col sm:flex-row gap-4">
                  <EmailInputField
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={handleInputChange}
                    error={error}
                  />
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 min-w-[140px]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Subscribe</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
              
             
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;