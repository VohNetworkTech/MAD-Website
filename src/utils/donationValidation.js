export const validateDonationForm = (formData) => {
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

  // Validate donation amount
  if (!formData.donationAmount) {
    errors.donationAmount = 'Donation amount is required';
  } else {
    const amount = Number(formData.donationAmount);
    if (isNaN(amount) || amount <= 0) {
      errors.donationAmount = 'Please enter a valid donation amount';
    } else if (amount < 1) {
      errors.donationAmount = 'Minimum donation amount is ₹1';
    } else if (amount > 10000000) {
      errors.donationAmount = 'Maximum donation amount is ₹1,00,00,000';
    }
  }

  // Validate donation type
  if (!formData.donationType?.trim()) {
    errors.donationType = 'Please select a donation type';
  } else {
    const validTypes = ['One-Time', 'Monthly', 'Sponsor a Program', 'Corporate Donation'];
    if (!validTypes.includes(formData.donationType)) {
      errors.donationType = 'Invalid donation type selected';
    }
  }

  // Validate message (optional but check length if provided)
  if (formData.message && formData.message.trim().length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};