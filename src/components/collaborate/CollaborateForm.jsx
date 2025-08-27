import React, { useState } from 'react';
import { Send, CheckCircle, User, Building, Mail, Phone, Target, MessageSquare } from 'lucide-react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Collaboration form submitted:', formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
      
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
      }, 4000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="collaborate-form" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Request Submitted!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for your interest in partnering with MAD Foundation. We're excited about the potential collaboration opportunities.
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
            <div className="space-y-6">
              {/* Personal and Organization Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Building className="w-4 h-4 inline mr-2" />
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    placeholder="Enter organization name"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email ID *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Area of Interest */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Target className="w-4 h-4 inline mr-2" />
                  Area of Interest for Collaboration *
                </label>
                <select
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                >
                  <option value="">Select area of collaboration</option>
                  {collaborationAreas.map((area, index) => (
                    <option key={index} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your organization and how you'd like to collaborate with us..."
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
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
                  <strong>Our team will review your submission and get in touch with you soon.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateForm;