import React, { useState } from 'react';
import { Send, CheckCircle, User, Mail, Phone, MessageSquare, AlertCircle } from 'lucide-react';
import volunteerService from '../../services/volunteerService';
import { validateVolunteerForm } from '../../utils/volunteerValidation';

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
        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
          rows ? 'resize-none' : ''
        } ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        required={name !== 'message'} // message is optional
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

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    expertise: [],
    howToHelp: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [setVolunteerReference] = useState('');

  const expertiseOptions = [
    'Education',
    'Skill Development',
    'Content Creation',
    'Advocacy',
    'Event Coordination',
    'Research & Policy',
    'More'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    // Client-side validation
    const validation = validateVolunteerForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    try {
      const response = await volunteerService.registerVolunteer(formData);
      
      if (response.success) {
        setIsSubmitted(true);
        setSubmitMessage(response.message);
        setVolunteerReference(response.data.volunteerReference);
        
        // Reset form after showing success message
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            mobile: '',
            expertise: [],
            howToHelp: '',
            message: ''
          });
          setIsSubmitted(false);
          setSubmitMessage('');
          setVolunteerReference('');
        }, 6000);
      }
    } catch (error) {
      setApiError(error.message || 'Failed to submit volunteer registration. Please try again.');
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

  const handleExpertiseChange = (option) => {
    setFormData(prev => ({
      ...prev,
      expertise: prev.expertise.includes(option)
        ? prev.expertise.filter(item => item !== option)
        : [...prev.expertise, option]
    }));
    
    // Clear expertise error if any option is selected
    if (errors.expertise && !formData.expertise.includes(option)) {
      setErrors(prev => ({ ...prev, expertise: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="volunteer-form" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to the Team!</h2>
              <p className="text-lg text-gray-600 mb-6">
                {submitMessage || "Thank you for registering as a volunteer with MAD Foundation. Our team will connect with you soon to discuss how you can make an impact."}
              </p>
              
              {/* {volunteerReference && (
                <div className="bg-green-50 rounded-xl p-4 border border-green-200 mb-6">
                  <p className="text-green-800 font-semibold">
                    Reference ID: <span className="font-mono text-lg">{volunteerReference}</span>
                  </p>
                  <p className="text-green-700 text-sm mt-1">
                    Please keep this reference number for your records.
                  </p>
                </div>
              )} */}
              
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <p className="text-green-800 text-sm">
                  <strong>Next Steps:</strong> Our team will review your application and get in touch with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="volunteer-form" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Volunteer Registration Form</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Fill out the form below to join as a volunteer. Our team will connect with you soon.
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

              {/* Areas of Expertise */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Areas of Expertise (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {expertiseOptions.map((option, index) => (
                    <label key={index} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.expertise.includes(option)}
                        onChange={() => handleExpertiseChange(option)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* How to Help */}
              <InputField
                name="howToHelp"
                placeholder="Describe how you'd like to contribute to our mission..."
                rows={4}
                value={formData.howToHelp}
                onChange={handleInputChange}
                error={errors.howToHelp}
                label="How Would You Like to Help? *"
              />

              {/* Optional Message */}
              <InputField
                icon={MessageSquare}
                name="message"
                placeholder="Any additional information you'd like to share..."
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                error={errors.message}
                label="Message (Optional)"
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
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    <span>Submit Registration</span>
                  </>
                )}
              </button>

              {/* Info Note */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <p className="text-sm text-blue-800 text-center">
                  <strong>Upon submission,</strong> our team will review your application and get in touch with you within 2-3 business days. You'll receive email confirmation shortly.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;