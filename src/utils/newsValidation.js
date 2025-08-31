export const validateNewsForm = (formData) => {
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

  // Validate news update
  if (!formData.newsUpdate?.trim()) {
    errors.newsUpdate = 'News update is required';
  } else if (formData.newsUpdate.trim().length < 10) {
    errors.newsUpdate = 'News update must be at least 10 characters long';
  } else if (formData.newsUpdate.trim().length > 2000) {
    errors.newsUpdate = 'News update must be less than 2000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};