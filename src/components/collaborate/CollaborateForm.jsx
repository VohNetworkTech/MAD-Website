import React, { useState } from 'react';
import { Send, CheckCircle, User, Building, Mail, Phone, Target, MessageSquare, AlertCircle } from 'lucide-react';
import collaborationService from '../../services/collaborationService';
import { validateCollaborationForm } from '../../utils/collaborationValidation';

// Input field component outside main component to prevent cursor issues
const InputField = ({ icon: Icon, type, name, placeholder, value, onChange, error, label, rows, options }) => {
  const Component = rows ? 'textarea' : (options ? 'select' : 'input');
  
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
        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
          rows ? 'resize-none' : ''
        } ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        required={name !== 'message'} // message is optional
      >
        {options && (
          <>
            <option value="">{placeholder}</option>
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </>
        )}
      </Component>
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </p>
      )}
    </div>
  );
};

const CollaborateForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    organizationName: '',
    email: '',
    mobile: '',
    areaOfInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [ setCollaborationReference] = useState('');

  const collaborationAreas = [
    'Education',
    'Employment',
    'Skill Development',
    'Livelihood',
    'Assistive Technology',
    'Healthcare & Rehabilitation',
    'Advocacy',
    'Accessibility',
    'Policy Development',
    'Research & Innovation',
    'Other'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    // Client-side validation
    const validation = validateCollaborationForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    try {
      const response = await collaborationService.submitCollaborationRequest(formData);
      
      if (response.success) {
        setIsSubmitted(true);
        setSubmitMessage(response.message);
        setCollaborationReference(response.data.collaborationReference);
        
        // Reset form after showing success message
        setTimeout(() => {
          setFormData({
            fullName: '',
            organizationName: '',
            email: '',
            mobile: '',
            areaOfInterest: '',
            message: ''
          });
          setIsSubmitted(false);
          setSubmitMessage('');
          setCollaborationReference('');
        }, 6000);
      }
    } catch (error) {
      setApiError(error.message || 'Failed to submit collaboration request. Please try again.');
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
      <section id="collaborate-form" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Request Submitted!</h2>
              <p className="text-lg text-gray-600 mb-6">
                {submitMessage || "Thank you for your interest in partnering with MAD Foundation. We're excited about the potential collaboration opportunities."}
              </p>
              
             
              
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <strong>Next Steps:</strong> Our partnership team will review your submission and contact you within 48 hours to discuss collaboration opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="collaborate-form" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Partner With Us – Let's Work Together</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              If you represent an NGO, corporate entity, institution, or government body and would like to collaborate with MAD Foundation, we'd love to hear from you!
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

              {/* Personal and Organization Information */}
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
                  icon={Building}
                  type="text"
                  name="organizationName"
                  placeholder="Enter organization name"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  error={errors.organizationName}
                  label="Organization Name *"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                <InputField
                  icon={Phone}
                  type="tel"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  error={errors.mobile}
                  label="Mobile Number *"
                />
              </div>

              {/* Area of Interest */}
              <InputField
                icon={Target}
                name="areaOfInterest"
                placeholder="Select area of collaboration"
                value={formData.areaOfInterest}
                onChange={handleInputChange}
                error={errors.areaOfInterest}
                label="Area of Interest for Collaboration *"
                options={collaborationAreas}
              />

              {/* Message */}
              <InputField
                icon={MessageSquare}
                name="message"
                placeholder="Tell us about your organization and how you'd like to collaborate with us..."
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                error={errors.message}
                label="Message (Optional)"
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
                    <span>Processing...</span>
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
                  <strong>Our partnership team will review your submission and get in touch with you within 48 hours.</strong> You'll receive email confirmation shortly.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateForm;