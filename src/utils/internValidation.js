export const validateInternForm = (formData) => {
  const errors = {};

  // Validate full name
  if (!formData.fullName?.trim()) {
    errors.fullName = 'Full name is required';
  } else if (formData.fullName.trim().length < 2) {
    errors.fullName = 'Name must be at least 2 characters long';
  } else if (formData.fullName.trim().length > 100) {
    errors.fullName = 'Name must be less than 100 characters';
  }

  // Validate email
  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    } else if (formData.email.length > 254) {
      errors.email = 'Email is too long';
    }
  }

  // Validate mobile
  if (!formData.mobile?.trim()) {
    errors.mobile = 'Mobile number is required';
  } else {
    const cleanPhone = formData.mobile.replace(/\D/g, '');
    if (cleanPhone.length < 10 || cleanPhone.length > 15) {
      errors.mobile = 'Mobile number must be between 10-15 digits';
    }
    
    // Check for suspicious patterns
    const suspiciousPatterns = [
      /^0{10,}$/, // All zeros
      /^1{10,}$/, // All ones
      /^(.)\1{9,}$/, // Repeated same digit
    ];
    
    if (suspiciousPatterns.some(pattern => pattern.test(cleanPhone))) {
      errors.mobile = 'Invalid mobile number format';
    }
  }

  // Validate internship area
  if (!formData.internshipArea?.trim()) {
    errors.internshipArea = 'Please select an internship area';
  } else {
    const validAreas = ['Research & Policy', 'Content Development', 'Event Coordination', 'Social Media', 'Assistive Technology', 'More'];
    if (!validAreas.includes(formData.internshipArea)) {
      errors.internshipArea = 'Invalid internship area selected';
    }
  }

  // Validate motivation
  if (!formData.motivation?.trim()) {
    errors.motivation = 'Please tell us why you want to intern with us';
  } else if (formData.motivation.trim().length < 20) {
    errors.motivation = 'Motivation must be at least 20 characters long';
  } else if (formData.motivation.trim().length > 1000) {
    errors.motivation = 'Motivation must be less than 1000 characters';
  }

  // Validate education (optional but check length if provided)
  if (formData.education && formData.education.trim().length > 1000) {
    errors.education = 'Education background must be less than 1000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};