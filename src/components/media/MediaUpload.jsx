import React, { useState } from 'react';
import { Send, CheckCircle, User, Mail, Link, MessageSquare, AlertCircle } from 'lucide-react';
import mediaService from '../../services/mediaService';
import { validateMediaForm } from '../../utils/mediaValidation';

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
        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all ${
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

const MediaUpload = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mediaUrl: '',
    description: ''
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
    const validation = validateMediaForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    try {
      const response = await mediaService.submitMediaUpload(formData);
      
      if (response.success) {
        setIsSubmitted(true);
        setSubmitMessage(response.message);
        setSubmissionReference(response.data.submissionReference);
        
        // Reset form after showing success message
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            mediaUrl: '',
            description: ''
          });
          setIsSubmitted(false);
          setSubmitMessage('');
          setSubmissionReference('');
        }, 5000);
      }
    } catch (error) {
      setApiError(error.message || 'Failed to submit media. Please try again.');
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
      <section id="media-upload" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Submitted!</h2>
              <p className="text-lg text-gray-600 mb-6">
                {submitMessage || "Thank you for sharing your experience with MAD Foundation. Your media submission has been received successfully."}
              </p>
              
             
              
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <p className="text-purple-800 text-sm">
                  <strong>What's Next:</strong> Your submissions may be featured on our website and social media after review by our team. You'll receive email updates about your submission status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="media-upload" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Submit Your Photos & Videos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Were you part of an event or an initiative by MAD Foundation? Share your experiences with us!
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

              {/* Media URL */}
              <InputField
                icon={Link}
                type="url"
                name="mediaUrl"
                placeholder="https://example.com/your-photo-or-video.jpg"
                value={formData.mediaUrl}
                onChange={handleInputChange}
                error={errors.mediaUrl}
                label="Media URL (Photo/Video Link) *"
              />

              {/* Description */}
              <InputField
                icon={MessageSquare}
                name="description"
                placeholder="Tell us about this photo/video, the event, or your experience..."
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                error={errors.description}
                label="Description"
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
                  <strong>Submit your media URL above.</strong> We review all submissions and feature relevant content that aligns with our mission. You'll receive email confirmation and status updates.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaUpload;