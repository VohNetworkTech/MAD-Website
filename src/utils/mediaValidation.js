export const validateMediaForm = (formData) => {
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

  // Validate media URL
  if (!formData.mediaUrl?.trim()) {
    errors.mediaUrl = 'Media URL is required';
  } else {
    try {
      new URL(formData.mediaUrl.trim());
      
      // Check if URL is for common image/video formats
      const url = formData.mediaUrl.trim().toLowerCase();
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'];
      const videoExtensions = ['.mp4', '.mov', '.avi', '.wmv', '.flv', '.webm', '.mkv'];
      const supportedDomains = ['youtube.com', 'youtu.be', 'vimeo.com', 'drive.google.com', 'dropbox.com', 'imgur.com'];
      
      const hasValidExtension = [...imageExtensions, ...videoExtensions].some(ext => url.includes(ext));
      const hasValidDomain = supportedDomains.some(domain => url.includes(domain));
      
      if (!hasValidExtension && !hasValidDomain) {
        errors.mediaUrl = 'Please provide a valid image/video URL or link from supported platforms (YouTube, Vimeo, Google Drive, etc.)';
      }
    } catch (e) {
      errors.mediaUrl = 'Please enter a valid URL';
    }
  }

  // Validate description (optional but if provided, should meet criteria)
  if (formData.description?.trim()) {
    if (formData.description.trim().length > 1000) {
      errors.description = 'Description must be less than 1000 characters';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};