import React, { useState } from 'react';
import { Send, CheckCircle, User, Mail, Phone, GraduationCap, MessageSquare, AlertCircle } from 'lucide-react';
import internService from '../../services/internService';
import { validateInternForm } from '../../utils/internValidation';

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
        required={name !== 'education'} // education is optional
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

const InternForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    internshipArea: '',
    education: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [setInternReference] = useState('');

  const internshipAreas = [
    'Research & Policy',
    'Content Development',
    'Event Coordination',
    'Social Media',
    'Assistive Technology',
    'More'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    // Client-side validation
    const validation = validateInternForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    try {
      const response = await internService.applyInternship(formData);
      
      if (response.success) {
        setIsSubmitted(true);
        setSubmitMessage(response.message);
        setInternReference(response.data.internReference);
        
        // Reset form after showing success message
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            mobile: '',
            internshipArea: '',
            education: '',
            motivation: ''
          });
          setIsSubmitted(false);
          setSubmitMessage('');
          setInternReference('');
        }, 6000);
      }
    } catch (error) {
      setApiError(error.message || 'Failed to submit internship application. Please try again.');
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
      <section id="intern-form" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
              <p className="text-lg text-gray-600 mb-6">
                {submitMessage || "Thank you for applying for an internship with MAD Foundation. Our team will review your application and get in touch with you soon."}
              </p>
              
              {/* {internReference && (
                <div className="bg-green-50 rounded-xl p-4 border border-green-200 mb-6">
                  <p className="text-green-800 font-semibold">
                    Reference ID: <span className="font-mono text-lg">{internReference}</span>
                  </p>
                  <p className="text-green-700 text-sm mt-1">
                    Please keep this reference number for your records.
                  </p>
                </div>
              )} */}
              
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <p className="text-green-800 text-sm">
                  <strong>Next Steps:</strong> We will contact you to discuss your application and potential internship opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="intern-form" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Internship Registration Form</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Fill out the form below to apply for an internship. Our team will connect with you soon.
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

              {/* Internship Area */}
              <InputField
                name="internshipArea"
                placeholder="Select an area"
                value={formData.internshipArea}
                onChange={handleInputChange}
                error={errors.internshipArea}
                label="Preferred Internship Area *"
                options={internshipAreas}
              />

              {/* Educational Background */}
              <InputField
                icon={GraduationCap}
                name="education"
                placeholder="Tell us about your educational background, degree, institution, etc."
                rows={3}
                value={formData.education}
                onChange={handleInputChange}
                error={errors.education}
                label="Educational Background (Optional)"
              />

              {/* Why Intern */}
              <InputField
                icon={MessageSquare}
                name="motivation"
                placeholder="Tell us why you want to intern with MAD Foundation and what you hope to achieve..."
                rows={4}
                value={formData.motivation}
                onChange={handleInputChange}
                error={errors.motivation}
                label="Why Do You Want to Intern with Us? *"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-green-700 hover:to-blue-700 transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>

              {/* Info Note */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <p className="text-sm text-blue-800 text-center">
                  <strong>Upon submission,</strong> our team will review your application and get in touch with you within 5-7 business days. You'll receive email confirmation shortly.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternForm;

  // Get all interns (Admin on