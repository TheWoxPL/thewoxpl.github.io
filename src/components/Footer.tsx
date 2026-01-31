import React from "react";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { href: "#about", label: t.footer.quickLinks.about },
    { href: "#skills", label: t.footer.quickLinks.skills },
    { href: "#projects", label: t.footer.quickLinks.projects },
    { href: "#contact", label: t.footer.quickLinks.contact },
  ];

  const socialLinks = [
    { href: "https://github.com/thewoxpl", icon: <Github size={20} />, label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/wojciech-bubula",
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
    },
    {
      href: "mailto:wojciech.bubula@outlook.com",
      icon: <Mail size={20} />,
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold gradient-text">Wojciech</h3>
                <p className="text-gray-400 dark:text-gray-500 mt-2">
                  {t.footer.about.subtitle}
                </p>
              </div>
              <p className="text-gray-400 dark:text-gray-500 leading-relaxed mb-6 max-w-md">
                {t.footer.about.description}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 dark:bg-gray-950 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300 group"
                    aria-label={link.label}
                  >
                    <div className="text-gray-400 dark:text-gray-500 group-hover:text-white dark:group-hover:text-gray-200 transition-colors duration-300">
                      {link.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 dark:text-gray-200">{t.footer.quickLinks.title}</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 dark:text-gray-200">{t.footer.connect.title}</h4>
              <div className="space-y-3 text-gray-400 dark:text-gray-500">
                <p>wojciech.bubula@outlook.com</p>
                <p>+48 *** *** ***</p>
                <p>{t.contact.info.locationValue}</p>
              </div>
              <div className="mt-6">
                <span className="inline-flex items-center px-3 py-1 bg-green-900/30 dark:bg-green-900/20 text-green-400 dark:text-green-300 rounded-full text-sm">
                  <div className="w-2 h-2 bg-green-400 dark:bg-green-300 rounded-full mr-2 animate-pulse"></div>
                  {t.contact.availability}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-950 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-500 mb-4 md:mb-0">
              <span>© {currentYear} Wojciech. {t.footer.copyright.madeWith}</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>{t.footer.copyright.love}</span>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-300 group"
              aria-label={t.footer.copyright.backToTop}
            >
              <span>{t.footer.copyright.backToTop}</span>
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
