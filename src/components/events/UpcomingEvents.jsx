import React, { useState, useCallback, useMemo } from 'react';
import { Calendar, Clock, MapPin, X, ExternalLink, User, Mail, Phone, Building, Briefcase, MapIcon } from 'lucide-react';
import eventRegistrationService from '../../services/eventRegistrationService';
const UpcomingEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [successData, setSuccessData] = useState({});
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    city: '',
    occupation: '',
    organization: '',
    isPersonWithDisability: '',
    disabilityType: '',
    otherDisabilityText: ''
  });

  const events = [
    {
      id: 1,
      title: "MAD Foundation – First Anniversary Convention",
      date: "Sunday, 7th September 2025",
      time: "09:30 AM - 3:00 PM",
      location: "Ravi Conference Hall, Kisan Bhawan, Sector 35, Chandigarh",
      banner: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1756896117635%3A0.7123136851411225.png",
      description: "The First Anniversary Convention of MAD Foundation (My Action for the Disabled Foundation) marks a significant milestone in our journey towards empowering persons with disabilities. This convention brings together thought leaders, professionals, advocates, and community members to share knowledge, celebrate achievements, and explore future pathways of empowerment.With the theme “Empowering Abilities, Enabling Futures,” the event highlights the Foundation’s commitment to education, skill development, mental health, technology, and legal empowerment for persons with disabilities. It is not only a celebration of our progress but also a platform for collaboration, innovation, and inclusive action.",
      agenda: [
        "9:30 – 10:00 AM – Registration",
        "10:00 – 10:30 AM – Inaugural Ceremony: Lighting of Lamp, Welcome Address by MAD Foundation, Address by Chief Guest",
        "10:30 – 11:00 AM – Session I: Advancing Legal Literacy for Persons with Disabilities",
        "11:00 – 11:20 AM – Refreshment Break",
        "11:20 AM – 12:20 PM – Session II: Mental Health and Well-Being of Persons with Disabilities",
        "12:20 – 1:40 PM – Session III: Harnessing AI and Assistive Devices for Persons with Disabilities",
        "1:40 – 1:50 PM – Felicitation of Guests and Dignitaries",
        "1:50 – 1:55 PM – Vote of Thanks",
        "2:00 – 3:00 PM – Networking Lunch"
      ],
      whyAttend: [
        "Gain insights into critical issues shaping the lives of persons with disabilities",
        "Learn from experts about legal literacy, mental health, and assistive technologies",
        "Network with policymakers, professionals, and advocates working in the disability sector",
        "Celebrate achievements and contribute to shaping inclusive futures"
      ],
      registration: "Free Registration",
      contact: "contact@mad-foundation.org"
    },
    {
      id: 2,
      title: "MAD Foundation Career Guidance Workshop at International Purple Fest, Goa",
      date: "Saturday, 11th October 2025",
      time: "9:30 AM – 5:30 PM",
      location: "International Purple Fest, Goa",
      banner: "https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1756897516530%3A0.9499948728907168.png",
      description: "MAD Foundation, in collaboration with Radio Udaan, is organizing a Career Guidance Workshop at the prestigious International Purple Fest, Goa. This day-long program is dedicated to empowering persons with disabilities by showcasing diverse career opportunities and offering practical guidance to help them achieve their aspirationsThe workshop will feature interactive sessions led by experts and successful professionals with disabilities, covering career paths in law, civil services, the corporate sector, entrepreneurship, freelancing, and skill-based employment.",
      whyAttend: [
        "Gain valuable insights into diverse professional opportunities",
        "Learn from successful role models and mentors",
        "Explore career paths including law, civil services, corporate careers, freelancing, and more",
        "Network with NGOs, educators, and employment service providers",
        "Be part of an empowering dialogue on accessibility, inclusion, and readiness for the future"
      ],
      agenda: [
        "9:30 AM – 10:00 AM – Opening Ceremony: Welcome note, introduction to MAD Foundation & Radio Udaan",
        "10:00 AM – 11:00 AM – Session I: Law as a Career for Persons with Disabilities",
        "11:00 AM – 11:30 AM – Tea Break",
        "11:30 AM – 12:30 PM – Session II: Civil Services as a Career for Persons with Disabilities",
        "12:30 PM – 1:30 PM – Session III: Corporate Careers for Persons with Disabilities",
        "1:30 PM – 2:30 PM – Lunch Break",
        "2:30 PM – 3:30 PM – Session IV: Entrepreneurship & Freelancing Opportunities for Persons with Disabilities",
        "3:30 PM – 4:00 PM – Tea Break",
        "4:00 PM – 5:00 PM – Session V: Employment Opportunities for Unskilled Persons with Disabilities",
        "5:00 PM – 5:30 PM – Closing Ceremony: Acknowledgments and Vote of Thanks"
      ],
      participants: "40 participants",
      registration: "Free Registration",
      contact: "contact@mad-foundation.org"
    }
  ];

  const disabilityTypes = useMemo(() => [
    "Visual Impairment",
    "Hearing Impairment", 
    "Locomotor Disability",
    "Intellectual Disability",
    "Speech & Language Disability",
    "Multiple Disabilities",
    "Other (please specify)"
  ], []);

  // Completely stable input change handler
  const handleInputChange = useCallback((fieldName) => {
    return (e) => {
      const value = e.target.value;
      
      setFormData(prev => {
        const updated = { ...prev, [fieldName]: value };
        
        // Clear other disability text if disability type changes
        if (fieldName === 'disabilityType' && value !== 'Other (please specify)') {
          updated.otherDisabilityText = '';
        }
        
        return updated;
      });

      // Clear specific error when user starts typing
      if (errors[fieldName]) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[fieldName];
          return newErrors;
        });
      }
      
      // Clear API error when user makes changes
      if (apiError) {
        setApiError('');
      }
    };
  }, [errors, apiError]);

  // Individual handlers for each field - this prevents re-rendering issues
  const handleFullNameChange = useMemo(() => handleInputChange('fullName'), [handleInputChange]);
  const handleEmailChange = useMemo(() => handleInputChange('email'), [handleInputChange]);
  const handleMobileChange = useMemo(() => handleInputChange('mobileNumber'), [handleInputChange]);
  const handleCityChange = useMemo(() => handleInputChange('city'), [handleInputChange]);
  const handleOccupationChange = useMemo(() => handleInputChange('occupation'), [handleInputChange]);
  const handleOrganizationChange = useMemo(() => handleInputChange('organization'), [handleInputChange]);
  const handleDisabilityTypeChange = useMemo(() => handleInputChange('disabilityType'), [handleInputChange]);
  const handleOtherDisabilityChange = useMemo(() => handleInputChange('otherDisabilityText'), [handleInputChange]);

  // Fixed radio change handler
  const handleRadioChange = useCallback((value) => {
    setFormData(prev => ({ 
      ...prev, 
      isPersonWithDisability: value,
      disabilityType: value === 'No' ? '' : prev.disabilityType,
      otherDisabilityText: value === 'No' ? '' : prev.otherDisabilityText
    }));

    // Clear errors when radio changes
    if (errors.isPersonWithDisability) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.isPersonWithDisability;
        if (value === 'No') {
          delete newErrors.disabilityType;
          delete newErrors.otherDisabilityText;
        }
        return newErrors;
      });
    }
  }, [errors]);

  // Validation function
  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.isPersonWithDisability) {
      newErrors.isPersonWithDisability = 'This field is required';
    }

    if (formData.isPersonWithDisability === 'Yes' && !formData.disabilityType) {
      newErrors.disabilityType = 'Please select disability type';
    }

    if (formData.disabilityType === 'Other (please specify)' && !formData.otherDisabilityText.trim()) {
      newErrors.otherDisabilityText = 'Please specify your disability type';
    }

    return newErrors;
  }, [formData]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setApiError('');

    try {
      // Prepare registration data for the service
      const registrationData = {
        fullName: formData.fullName,
        email: formData.email,
        mobileNumber: formData.mobileNumber,
        city: formData.city,
        occupation: formData.occupation,
        organization: formData.organization,
        isPersonWithDisability: formData.isPersonWithDisability,
        disabilityType: formData.disabilityType,
        otherDisabilityText: formData.otherDisabilityText,
        eventId: selectedEvent.id,
        eventTitle: selectedEvent.title
      };

      console.log('Submitting registration data:', registrationData);

      // Call the actual registration service
      const response = await eventRegistrationService.submitEventRegistration(registrationData);

      if (response.success) {
        setSuccessData({
          message: response.message,
          registrationReference: response.registrationReference,
          eventTitle: response.eventTitle
        });

        // Reset form on success
        setFormData({
          fullName: '',
          email: '',
          mobileNumber: '',
          city: '',
          occupation: '',
          organization: '',
          isPersonWithDisability: '',
          disabilityType: '',
          otherDisabilityText: ''
        });

        setShowRegistrationForm(false);
        setShowSuccessMessage(true);
      } else {
        // Handle service-level failure
        setApiError(response.message || 'Registration failed. Please try again.');
      }

    } catch (error) {
      console.error('Registration submission error:', error);
      
      // Handle different types of errors
      if (error.message) {
        // Service validation errors or known errors
        setApiError(error.message);
      } else if (error.errors && Array.isArray(error.errors)) {
        // Multiple validation errors
        setApiError(error.errors.join(', '));
      } else {
        // Unknown error
        setApiError('Failed to submit registration. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [validateForm, selectedEvent, formData]);

  const closeRegistrationForm = useCallback(() => {
    setShowRegistrationForm(false);
    setErrors({});
    setApiError('');
  }, []);

  // Memoized Registration Form Component
  const RegistrationForm = useMemo(() => {
    if (!showRegistrationForm) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-t-3xl">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Event Registration</h2>
              <button
                onClick={closeRegistrationForm}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
                type="button"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <p className="text-blue-100 mt-2">{selectedEvent?.title}</p>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* API Error Display */}
            {apiError && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="flex items-center">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  <p className="text-sm text-red-700">{apiError}</p>
                </div>
              </div>
            )}

            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={handleFullNameChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
                autoComplete="name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <X className="w-4 h-4 mr-1" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email and Mobile */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email ID *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleEmailChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <X className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={handleMobileChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    errors.mobileNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your mobile number"
                  maxLength="10"
                  autoComplete="tel"
                />
                {errors.mobileNumber && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <X className="w-4 h-4 mr-1" />
                    {errors.mobileNumber}
                  </p>
                )}
              </div>
            </div>

            {/* City and Occupation */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapIcon className="w-4 h-4 inline mr-2" />
                  City
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={handleCityChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your city"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  Occupation
                </label>
                <input
                  type="text"
                  value={formData.occupation}
                  onChange={handleOccupationChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your occupation"
                />
              </div>
            </div>

            {/* Organization */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Building className="w-4 h-4 inline mr-2" />
                Organization
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={handleOrganizationChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your organization name"
              />
            </div>

            {/* Disability Question */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Are you a Person with Disability? *
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="Yes"
                    checked={formData.isPersonWithDisability === 'Yes'}
                    onChange={(e) => handleRadioChange(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Yes</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="No"
                    checked={formData.isPersonWithDisability === 'No'}
                    onChange={(e) => handleRadioChange(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">No</span>
                </label>
              </div>
              {errors.isPersonWithDisability && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <X className="w-4 h-4 mr-1" />
                  {errors.isPersonWithDisability}
                </p>
              )}
            </div>

            {/* Disability Type Dropdown */}
            {formData.isPersonWithDisability === 'Yes' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Type of Disability *
                </label>
                <select
                  value={formData.disabilityType}
                  onChange={handleDisabilityTypeChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    errors.disabilityType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select disability type</option>
                  {disabilityTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
                {errors.disabilityType && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <X className="w-4 h-4 mr-1" />
                    {errors.disabilityType}
                  </p>
                )}
              </div>
            )}

            {/* Other Disability Text */}
            {formData.disabilityType === 'Other (please specify)' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Please specify your disability type *
                </label>
                <input
                  type="text"
                  value={formData.otherDisabilityText}
                  onChange={handleOtherDisabilityChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    errors.otherDisabilityText ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Please specify your disability type"
                />
                {errors.otherDisabilityText && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <X className="w-4 h-4 mr-1" />
                    {errors.otherDisabilityText}
                  </p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={closeRegistrationForm}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Registration</span>
                    <ExternalLink className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }, [showRegistrationForm, selectedEvent, formData, errors, apiError, isSubmitting, handleSubmit, closeRegistrationForm, handleFullNameChange, handleEmailChange, handleMobileChange, handleCityChange, handleOccupationChange, handleOrganizationChange, handleDisabilityTypeChange, handleOtherDisabilityChange, handleRadioChange, disabilityTypes]);

  const SuccessMessage = useMemo(() => {
    if (!showSuccessMessage) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-3xl max-w-lg w-full p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
          
          <p className="text-gray-600 mb-6">
            {successData.message || 'Thank you for submitting your response. Your response has been submitted successfully.'}
          </p>

          {successData.registrationReference && (
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mb-6">
              <p className="text-blue-800 font-semibold">
                Registration ID: <span className="font-mono text-lg">{successData.registrationReference}</span>
              </p>
              <p className="text-blue-700 text-sm mt-1">
                Please save this reference number for your records.
              </p>
            </div>
          )}

          <button
            onClick={() => {
              setShowSuccessMessage(false);
              setSuccessData({});
            }}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    );
  }, [showSuccessMessage, successData]);

  const EventModal = useCallback(({ event, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="relative">
          <img 
            src={event.banner} 
            alt={event.title}
            className="w-full h-auto object-cover rounded-t-3xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all"
            type="button"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8">
          {/* Event Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="font-medium">{event.date}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="font-medium">{event.time}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-red-600" />
                <span className="font-medium">{event.location}</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Registration</h3>
              <p className="text-gray-700 mb-4">{event.registration}</p>
              <div className="text-sm text-gray-600">
                <p className="font-medium">Contact:</p>
                <p>{event.contact}</p>
              </div>
            </div>
          </div>

          {/* Why Attend Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why Attend This Event?</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {event.whyAttend?.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-blue-50 rounded-xl border border-blue-100">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">About This Event</h3>
            <p className="text-gray-700 leading-relaxed text-lg">{event.description}</p>
          </div>

          {/* Agenda */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Event Agenda</h3>
            <div className="space-y-3">
              {event.agenda.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => {
                setShowRegistrationForm(true);
              }}
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center space-x-2"
            >
              <span>Register Now</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ), []);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for transformative events designed to empower, educate, and create opportunities for persons with disabilities
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Event Banner */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={event.banner} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Event Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <MapPin className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-medium">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
                    {event.description}
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}

      {/* Registration Form */}
      {RegistrationForm}

      {/* Success Message */}
      {SuccessMessage}
    </section>
  );
};

export default UpcomingEvents;