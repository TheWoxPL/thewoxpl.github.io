import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

interface MenuItemType {
  href: string;
  label: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      // Track active section for navigation highlighting
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function with animation
  const smoothScrollTo = (
    targetId: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId.replace("#", ""));
    if (targetElement) {
      const headerHeight = 60; // Account for smaller fixed header
      const targetPosition = targetElement.offsetTop - headerHeight;

      // Add a subtle animation to the target element
      targetElement.style.transform = "scale(1.02)";
      targetElement.style.transition = "transform 0.3s ease-out";

      // Smooth scroll
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Reset animation after scroll
      setTimeout(() => {
        targetElement.style.transform = "scale(1)";
        setTimeout(() => {
          targetElement.style.transition = "";
        }, 300);
      }, 800);
    }

    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const menuItems: MenuItemType[] = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Render overlay and menu in a portal for proper stacking
  const mobileMenuPortal = isMenuOpen
    ? createPortal(
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu overlay"
          />
          {/* Mobile Menu */}
          <div className="fixed top-0 left-0 right-0 z-50 mt-[60px] mx-3 fade-in-menu md:hidden">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => smoothScrollTo(item.href, e)}
                  className={`block px-4 py-3 text-sm font-medium transition-all duration-300 border-b border-gray-100 last:border-b-0 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-center space-x-6 px-4 py-3 bg-gray-50">
                <a
                  href="https://github.com/thewoxpl"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/wojciech-bubula"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:wojciech.bubula@outlook.com"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900 space-header backdrop-blur-sm shadow-lg">
      <nav className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl md:text-2xl font-bold gradient-text">
              Portfolio
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => smoothScrollTo(item.href, e)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group text-red ${
                    activeSection === item.href.replace("#", "")
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${
                      activeSection === item.href.replace("#", "")
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/thewoxpl"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/wojciech-bubula"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:wojciech.bubula@outlook.com"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-400 focus:outline-none transition-colors p-1"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
      </nav>
      {mobileMenuPortal}
    </header>
  );
};

export default Header;
