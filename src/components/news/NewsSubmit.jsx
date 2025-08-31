import React, { useState } from 'react';
import { Send, CheckCircle, User, Mail, Newspaper, AlertCircle } from 'lucide-react';
import newsService from '../../services/newsService';
import { validateNewsForm } from '../../utils/newsValidation';

// Input field component outside main component to prevent cursor issues
const InputField = ({ icon: Icon, type, name, placeholder, value, onChange, error, label, rows }) => {
  const Component = rows ? 'textarea' : 'input';
  
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {Icon && <Icon className="w-4 h-4 inline mr-2" />}
        {label}
      </label>
      <Component
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all ${
          rows ? 'resize-none' : ''
        } ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        required
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </p>
      )}
    </div>
  );
};

const NewsSubmit = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    newsUpdate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [ setSubmissionReference] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    // Client-side validation
    const validation = validateNewsForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    try {
      const response = await newsService.submitNewsUpdate(formData);
      
      if (response.success) {
        setIsSubmitted(true);
        setSubmitMessage(response.message);
        setSubmissionReference(response.data.submissionReference);
        
        // Reset form after showing success message
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            newsUpdate: ''
          });
          setIsSubmitted(false);
          setSubmitMessage('');
          setSubmissionReference('');
        }, 5000);
      }
    } catch (error) {
      setApiError(error.message || 'Failed to submit news update. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    // Clear API error when user makes changes
    if (apiError) {
      setApiError('');
    }
  };

  if (isSubmitted) {
    return (
      <section id="news-submit" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">News Submitted!</h2>
              <p className="text-lg text-gray-600 mb-6">
                {submitMessage || "Thank you for sharing your news with MAD Foundation. We appreciate your contribution to our community updates."}
              </p>
              
              {/* {submissionReference && (
                <div className="bg-orange-50 rounded-xl p-4 border border-orange-200 mb-6">
                  <p className="text-orange-800 font-semibold">
                    Reference ID: <span className="font-mono text-lg">{submissionReference}</span>
                  </p>
                  <p className="text-orange-700 text-sm mt-1">
                    Please keep this reference number for your records.
                  </p>
                </div>
              )} */}
              
              <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                <p className="text-orange-800 text-sm">
                  <strong>What's Next:</strong> Our team will review your submission and may feature it on our platform if it aligns with our mission. You'll receive email updates about your submission status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news-submit" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Have News to Share?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              If you have an announcement, event, or achievement related to disability empowerment, accessibility, or inclusion, share it with us, and we may feature it on our platform!
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* API Error Display */}
              {apiError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    <p className="text-sm text-red-700">{apiError}</p>
                  </div>
                </div>
              )}

              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  icon={User}
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  error={errors.fullName}
                  label="Full Name *"
                />
                <InputField
                  icon={Mail}
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                  label="Email ID *"
                />
              </div>

              {/* News Update */}
              <InputField
                icon={Newspaper}
                name="newsUpdate"
                placeholder="Share your news, announcement, event details, or achievement related to disability empowerment..."
                rows={6}
                value={formData.newsUpdate}
                onChange={handleInputChange}
                error={errors.newsUpdate}
                label="News or Update *"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    <span>Submit</span>
                  </>
                )}
              </button>

              {/* Info Note */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <p className="text-sm text-blue-800 text-center">
                  <strong>Submit your news update above.</strong> We review all submissions and feature relevant content that aligns with our mission. You'll receive email confirmation and status updates.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSubmit;