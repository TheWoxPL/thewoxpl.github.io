import emailjs from '@emailjs/browser';

// Rate limiting - simple client-side implementation
let lastEmailSent = 0;
const EMAIL_COOLDOWN = 30000; // 30 seconds between emails

// Initialize EmailJS
const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }
};

// Interface for form data
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Check if user can send email (rate limiting)
const canSendEmail = (): boolean => {
  const now = Date.now();
  if (now - lastEmailSent < EMAIL_COOLDOWN) {
    return false;
  }
  return true;
};

// Send email using EmailJS
export const sendEmail = async (formData: ContactFormData): Promise<{ success: boolean; error?: string }> => {
  try {
    // Validate input
    if (!formData.name?.trim() || !formData.email?.trim() || !formData.message?.trim()) {
      return { success: false, error: 'Please fill in all required fields.' };
    }

    if (!isValidEmail(formData.email)) {
      return { success: false, error: 'Please enter a valid email address.' };
    }

    if (formData.message.length < 10) {
      return { success: false, error: 'Message must be at least 10 characters long.' };
    }

    if (formData.message.length > 1000) {
      return { success: false, error: 'Message must be less than 1000 characters.' };
    }

    // Check rate limiting
    if (!canSendEmail()) {
      return { success: false, error: 'Please wait 30 seconds before sending another message.' };
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      console.error('EmailJS configuration is missing. Please check your environment variables.');
      return { success: false, error: 'Email service is not configured properly.' };
    }

    // Initialize EmailJS if not already done
    initEmailJS();

    // Send email - using template variable names that match your EmailJS template
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        title: formData.subject?.trim() || 'Contact Form Submission', // maps to {{title}} in template
        name: formData.name.trim(),                                   // maps to {{name}} in template
        email: formData.email.trim(),                                 // maps to {{email}} in template
        message: formData.message.trim(),                             // maps to {{message}} in template
        time: new Date().toLocaleString(),                            // maps to {{time}} in template
      }
    );

    console.log('Email sent successfully:', response);
    lastEmailSent = Date.now(); // Update rate limiting timestamp
    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: 'Failed to send email. Please try again later.' };
  }
};

// Send auto-reply email to the sender
export const sendAutoReply = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;

    if (!serviceId || !autoReplyTemplateId) {
      // Auto-reply is optional, so we just return true if not configured
      return true;
    }

    // Send auto-reply
    await emailjs.send(
      serviceId,
      autoReplyTemplateId,
      {
        to_name: formData.name,
        to_email: formData.email,
        subject: `Re: ${formData.subject}`,
      }
    );

    return true;
  } catch (error) {
    console.error('Failed to send auto-reply:', error);
    // Don't fail the main process if auto-reply fails
    return true;
  }
};
