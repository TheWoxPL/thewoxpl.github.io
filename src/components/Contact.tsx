import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import {
  sendEmail,
  sendAutoReply,
  type ContactFormData,
} from "../utils/emailService";
import { validateEmail, validateName, validateSubject, validateMessage } from "../utils/validation";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Real-time validation for touched fields
    if (touchedFields[name]) {
      validateField(name, value);
    }

    // Clear global error when user starts typing
    if (error) {
      setError(null);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouchedFields({ ...touchedFields, [name]: true });
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let validation;
    switch (name) {
      case "name":
        validation = validateName(value);
        break;
      case "email":
        validation = validateEmail(value);
        break;
      case "subject":
        validation = validateSubject(value);
        break;
      case "message":
        validation = validateMessage(value);
        break;
      default:
        return;
    }

    setFieldErrors(prev => ({
      ...prev,
      [name]: validation.isValid ? "" : validation.error!,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Send the main email
      const result = await sendEmail(formData);

      if (result.success) {
        // Send auto-reply (optional, won't fail if not configured)
        await sendAutoReply(formData);

        setIsSubmitted(true);

        // Reset form data but keep success message visible
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(
          result.error || "Failed to send message. Please try again later."
        );
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: t.contact.info.email,
      value: "wojciech.bubula@outlook.com",
      href: "mailto:wojciech.bubula@outlook.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: t.contact.info.phone,
      value: "+48 *** *** ***",
      href: "tel:+00 000 000 000",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: t.contact.info.location,
      value: t.contact.info.locationValue,
      href: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.contact.title} <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.contact.formTitle}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t.contact.formDescription}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg dark:shadow-gray-900/50 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                    <div className="text-blue-600 dark:text-blue-400">{info.icon}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                      {info.label}
                    </div>
                    <div className="text-gray-900 dark:text-white font-semibold">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-800 dark:text-green-300 font-semibold">
                  {t.contact.availability}
                </span>
              </div>
              <p className="text-green-700 dark:text-green-400 mt-2">
                {t.contact.availabilityDescription}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-gray-900/50 p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0" />
                    <p className="text-red-700 dark:text-red-300">{error}</p>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t.contact.form.name} {t.contact.form.required}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        fieldErrors.name && touchedFields.name
                          ? "border-red-500 dark:border-red-400"
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                      placeholder={t.contact.form.namePlaceholder}
                      aria-invalid={!!fieldErrors.name && touchedFields.name}
                      aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    />
                    {fieldErrors.name && touchedFields.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-600">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {t.contact.form.email} {t.contact.form.required}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        fieldErrors.email && touchedFields.email
                          ? "border-red-500 dark:border-red-400"
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                      placeholder={t.contact.form.emailPlaceholder}
                      aria-invalid={!!fieldErrors.email && touchedFields.email}
                      aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    />
                    {fieldErrors.email && touchedFields.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {t.contact.form.subject} {t.contact.form.required}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      fieldErrors.subject && touchedFields.subject
                        ? "border-red-500 dark:border-red-400"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder={t.contact.form.subjectPlaceholder}
                    aria-invalid={!!fieldErrors.subject && touchedFields.subject}
                    aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
                  />
                  {fieldErrors.subject && touchedFields.subject && (
                    <p id="subject-error" className="mt-1 text-sm text-red-600">
                      {fieldErrors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {t.contact.form.message} {t.contact.form.required}
                    </label>
                    <span
                      className={`text-xs ${
                        formData.message.length > 1000
                          ? "text-red-600 dark:text-red-400"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {formData.message.length}/1000
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows={6}
                    maxLength={1000}
                    className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                      fieldErrors.message && touchedFields.message
                        ? "border-red-500 dark:border-red-400"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder={t.contact.form.messagePlaceholder}
                    aria-invalid={!!fieldErrors.message && touchedFields.message}
                    aria-describedby={fieldErrors.message ? "message-error" : undefined}
                  ></textarea>
                  {fieldErrors.message && touchedFields.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      {t.contact.form.send}
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 dark:text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {t.contact.success.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {t.contact.success.message}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    {t.contact.success.confirmation}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    {t.contact.success.sendAnother}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
