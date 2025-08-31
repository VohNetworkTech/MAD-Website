import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Send } from 'lucide-react';
import contactUsService from '../../services/contactUsService';
import { validateContactUsForm } from '../../utils/contactUsValidation';

// Input field component outside main component to prevent cursor issues
const InputField = ({ type, name, placeholder, value, onChange, error, label, rows, options }) => {
  const Component = rows ? 'textarea' : (options ? 'select' : 'input');
  
  return (
    <div>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <Component
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          rows ? 'resize-none' : ''
        } ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${
          options ? 'text-gray-700' : ''
        }`}
        required
        {...(options && { defaultValue: value || '' })}
      >
        {options && (
          <>
            <option value="" disabled>{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
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

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [setTicketReference] = useState('');

  const subjectOptions = [
    { value: 'general-inquiry', label: 'General Inquiry' },
    { value: 'volunteering', label: 'Volunteering' },
    { value: 'internship', label: 'Internship' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'donation', label: 'Donation' },
    { value: 'other', label: 'Other' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    // Client-side validation
    const validation = validateContactUsForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    try {
      const response = await contactUsService.submitContactUs(formData);
      
      if (response.success) {
        setIsSubmitted(true);
        setSubmitMessage(response.message);
        setTicketReference(response.data.ticketReference);
        
        // Reset form after showing success message
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            mobile: '',
            subject: '',
            message: ''
          });
          setIsSubmitted(false);
          setSubmitMessage('');
          setTicketReference('');
        }, 5000);
      }
    } catch (error) {
      setApiError(error.message || 'Failed to submit contact form. Please try again.');
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
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-green-600">Message Sent Successfully!</h1>
          <p className="text-lg text-gray-600 mb-6">
            {submitMessage || "Thank you for contacting us! We have received your message and will get back to you soon."}
          </p>
          
          {/* {ticketReference && (
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mb-6 max-w-md mx-auto">
              <p className="text-blue-800 font-semibold">
                Ticket Reference: <span className="font-mono text-lg">{ticketReference}</span>
              </p>
              <p className="text-blue-700 text-sm mt-1">
                Please save this reference number for your records.
              </p>
            </div>
          )} */}
          
          <div className="bg-green-50 rounded-xl p-4 border border-green-200 max-w-md mx-auto">
            <p className="text-green-800 text-sm">
              <strong>Response Time:</strong> We typically respond within 24-48 hours. For urgent matters, please call us directly.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Contact Us</h1>
      <p className="mb-6 text-gray-700">
        Have questions or want to get in touch with us? Fill out the form below or reach us directly.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* API Error Display */}
            {apiError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  <p className="text-sm text-red-700">{apiError}</p>
                </div>
              </div>
            )}

            <InputField
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
            />

            <InputField
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />

            <InputField
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleInputChange}
              error={errors.mobile}
            />

            <InputField
              name="subject"
              placeholder="Select Subject"
              value={formData.subject}
              onChange={handleInputChange}
              error={errors.subject}
              options={subjectOptions}
            />

            <InputField
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              error={errors.message}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-2">Email:</p>
            <a href="mailto:contact@mad-foundation.org" className="text-blue-600 hover:text-blue-700 underline">
              contact@mad-foundation.org
            </a>
          </div>
          
          <div>
            <p className="font-semibold text-gray-900 mb-2">Phone:</p>
            <a href="tel:+919915670267" className="text-blue-600 hover:text-blue-700 underline">
               +91 9915670267
            </a>
          </div>
          
          <div>
            <p className="font-semibold text-gray-900 mb-2">Address:</p>
            <p className="leading-relaxed">
              J-54, First floor, near Vardhman Tower,<br />
              Vikas Puri, Delhi West,<br />
              Delhi-110018, India
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="font-semibold text-blue-900 mb-2">Response Times:</p>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• General inquiries: 24-48 hours</li>
              <li>• Partnership requests: Within 24 hours</li>
              <li>• Donation inquiries: Within 24 hours</li>
              <li>• Urgent matters: Call directly for immediate assistance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;