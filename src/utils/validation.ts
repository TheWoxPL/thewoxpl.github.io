/**
 * Form validation utilities
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validate email format
 */
export const validateEmail = (email: string): ValidationResult => {
  if (!email) {
    return { isValid: false, error: "Email is required" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: "Please enter a valid email address" };
  }

  return { isValid: true };
};

/**
 * Validate name field
 */
export const validateName = (name: string): ValidationResult => {
  if (!name || name.trim().length === 0) {
    return { isValid: false, error: "Name is required" };
  }

  if (name.trim().length < 2) {
    return { isValid: false, error: "Name must be at least 2 characters" };
  }

  return { isValid: true };
};

/**
 * Validate subject field
 */
export const validateSubject = (subject: string): ValidationResult => {
  if (!subject || subject.trim().length === 0) {
    return { isValid: false, error: "Subject is required" };
  }

  if (subject.trim().length < 3) {
    return { isValid: false, error: "Subject must be at least 3 characters" };
  }

  return { isValid: true };
};

/**
 * Validate message field
 */
export const validateMessage = (message: string): ValidationResult => {
  if (!message || message.trim().length === 0) {
    return { isValid: false, error: "Message is required" };
  }

  if (message.trim().length < 10) {
    return { isValid: false, error: "Message must be at least 10 characters" };
  }

  if (message.trim().length > 1000) {
    return { isValid: false, error: "Message must be less than 1000 characters" };
  }

  return { isValid: true };
};

/**
 * Validate entire contact form
 */
export const validateContactForm = (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  const nameValidation = validateName(formData.name);
  if (!nameValidation.isValid) {
    errors.name = nameValidation.error!;
  }

  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error!;
  }

  const subjectValidation = validateSubject(formData.subject);
  if (!subjectValidation.isValid) {
    errors.subject = subjectValidation.error!;
  }

  const messageValidation = validateMessage(formData.message);
  if (!messageValidation.isValid) {
    errors.message = messageValidation.error!;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
