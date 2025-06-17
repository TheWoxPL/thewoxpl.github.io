import React from "react";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import SpaceBackground from "./SpaceBackground";

const Hero = () => {
  // Smooth scroll function
  const smoothScrollTo = (targetId, event) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId.replace("#", ""));
    if (targetElement) {
      const headerHeight = 80;
      const targetPosition = targetElement.offsetTop - headerHeight;

      // Add animation to target element
      targetElement.style.transform = "scale(1.02)";
      targetElement.style.transition = "transform 0.3s ease-out";

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Reset animation
      setTimeout(() => {
        targetElement.style.transform = "scale(1)";
        setTimeout(() => {
          targetElement.style.transition = "";
        }, 300);
      }, 800);
    }
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Space Background */}
      <SpaceBackground />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Greeting */}
          <p className="text-lg text-blue-200 mb-4">Hello, I'm</p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
              Wojciech
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-light text-gray-200 mb-8">
            Frontend Developer & Fullstack Enthusiast
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            I create beautiful, responsive web applications with modern
            technologies. Passionate about clean code, user experience, and
            innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              onClick={(e) => smoothScrollTo("#contact", e)}
              className="btn-space-primary inline-flex items-center gap-2 transform hover:scale-105 transition-transform duration-300"
            >
              <span>Get In Touch</span>
            </a>
            {/* <a
              href="/resume.pdf"
              className="btn-space-secondary inline-flex items-center gap-2 transform hover:scale-105 transition-transform duration-300"
              download
            >
              <Download size={20} />
              <span>Download CV</span>
            </a> */}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/thewoxpl"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/wojciech-bubula"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} className="text-white" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a
              href="#about"
              onClick={(e) => smoothScrollTo("#about", e)}
              className="inline-block p-2 hover:scale-110 transition-transform duration-300"
            >
              <ArrowDown
                size={24}
                className="text-blue-300 hover:text-blue-200 transition-colors duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
