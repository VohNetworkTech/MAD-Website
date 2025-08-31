export const validateCollaborationForm = (formData) => {
  const errors = {};

  // Validate full name
  if (!formData.fullName?.trim()) {
    errors.fullName = 'Full name is required';
  } else if (formData.fullName.trim().length < 2) {
    errors.fullName = 'Name must be at least 2 characters long';
  } else if (formData.fullName.trim().length > 100) {
    errors.fullName = 'Name must be less than 100 characters';
  }

  // Validate organization name
  if (!formData.organizationName?.trim()) {
    errors.organizationName = 'Organization name is required';
  } else if (formData.organizationName.trim().length < 2) {
    errors.organizationName = 'Organization name must be at least 2 characters long';
  } else if (formData.organizationName.trim().length > 200) {
    errors.organizationName = 'Organization name must be less than 200 characters';
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

  // Validate area of interest
  if (!formData.areaOfInterest?.trim()) {
    errors.areaOfInterest = 'Please select an area of interest';
  } else {
    const validAreas = ['Education', 'Employment', 'Skill Development', 'Livelihood', 'Assistive Technology', 'Healthcare & Rehabilitation', 'Advocacy', 'Accessibility', 'Policy Development', 'Research & Innovation', 'Other'];
    if (!validAreas.includes(formData.areaOfInterest)) {
      errors.areaOfInterest = 'Invalid area of interest selected';
    }
  }

  // Validate message (optional but check length if provided)
  if (formData.message && formData.message.trim().length > 2000) {
    errors.message = 'Message must be less than 2000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
