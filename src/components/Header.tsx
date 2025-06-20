import React, { useState, useEffect } from "react";
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
      const headerHeight = 80; // Account for fixed header
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

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900 space-header backdrop-blur-sm shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold gradient-text">
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
              className="text-white hover:text-blue-400 focus:outline-none transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => smoothScrollTo(item.href, e)}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-300 rounded-md ${
                    activeSection === item.href.replace("#", "")
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <a
                  href="https://github.com/thewoxpl"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/wojciech-bubula"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:wojciech.bubula@outlook.com"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
