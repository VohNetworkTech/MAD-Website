// utils/eventRegistrationValidation.js
export const validateEventRegistrationForm = (formData) => {
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

  // Validate mobile number
  if (!formData.mobileNumber?.trim()) {
    errors.mobileNumber = 'Mobile number is required';
  } else {
    const mobileRegex = /^[0-9]{10,15}$/;
    if (!mobileRegex.test(formData.mobileNumber.trim())) {
      errors.mobileNumber = 'Please enter a valid mobile number (10-15 digits)';
    }
  }

  // Validate city (optional but if provided, should meet criteria)
  if (formData.city?.trim() && formData.city.trim().length > 100) {
    errors.city = 'City name must be less than 100 characters';
  }

  // Validate occupation (optional but if provided, should meet criteria)
  if (formData.occupation?.trim() && formData.occupation.trim().length > 100) {
    errors.occupation = 'Occupation must be less than 100 characters';
  }

  // Validate organization (optional but if provided, should meet criteria)
  if (formData.organization?.trim() && formData.organization.trim().length > 200) {
    errors.organization = 'Organization name must be less than 200 characters';
  }

  // Validate disability question
  if (!formData.isPersonWithDisability) {
    errors.isPersonWithDisability = 'Please specify if you are a person with disability';
  } else if (!['Yes', 'No'].includes(formData.isPersonWithDisability)) {
    errors.isPersonWithDisability = 'Please select a valid option';
  }

  // Validate disability type (required if person has disability)
  if (formData.isPersonWithDisability === 'Yes' && !formData.disabilityType) {
    errors.disabilityType = 'Please select disability type';
  }

  // Validate other disability text (required if "Other" is selected)
  if (formData.disabilityType === 'Other (please specify)') {
    if (!formData.otherDisabilityText?.trim()) {
      errors.otherDisabilityText = 'Please specify your disability type';
    } else if (formData.otherDisabilityText.trim().length > 200) {
      errors.otherDisabilityText = 'Disability description must be less than 200 characters';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};