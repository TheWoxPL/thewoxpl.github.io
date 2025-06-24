import React from "react";
import { ExternalLink, Github, Star } from "lucide-react";

const Projects: React.FC = () => {
  const featuredProject = {
    title: "Local Service Mechanic",
    description:
      "A full-stack web application developed with React and NestJS, using a REST API and MongoDB for data management. The project focuses on modern web technologies, PWA capabilities, clean architecture, Firebase services and efficient frontend–backend integration. Features include service booking, user management, and real-time updates.",
    image:
      "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: [
      "React",
      "NestJS",
      "TypeScript",
      "MongoDB",
      "SCSS",
      "Firebase",
      "REST API",
      "CI/CD",
    ],
    liveUrl: "https://local-service-mechanic.netlify.app/",
    githubUrl: "https://github.com/thewoxpl",
    highlights: [
      "Full-stack CRUD functionality",
      "Progressive Web App (PWA)",
      "Clean architecture principles",
      "Firebase integration for real-time features",
      "Modern CI/CD pipeline",
      "Responsive design with SCSS modules",
    ],
  };

  const projects = [
    {
      title: "GoodFood",
      description:
        "A simple PWA project developed in collaboration with colleagues. Built for quick and stable development using CI/CD pipelines and Shadcn library for rapid application growth. Features modern React architecture with TypeScript and Tailwind CSS.",
      image:
        "https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "PWA",
        "Shadcn",
        "CI/CD",
      ],
      liveUrl: "https://good-food-site.netlify.app/",
      githubUrl: "https://github.com/thewoxpl/good-food",
    },
    {
      title: "Shopping List",
      description:
        "A simple mobile-first application that allows users to manage a list of items efficiently. Originally developed in JavaScript with SCSS modules for styling. Later rewrote the application using Angular framework to demonstrate versatility across different technologies.",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "JavaScript", "SCSS", "Angular", "Mobile-First"],
      liveUrl: "https://thewoxpl-shopping-list.netlify.app/",
      githubUrl: "https://github.com/TheWoxPL/shopping-list",
    },
    {
      title: "PP4 - Java Spring Boot CRUD App",
      description:
        "A backend-focused application built with Java, featuring PayU payment integration, order management, and comprehensive JUnit testing. Includes a simple frontend using static HTML, CSS, and vanilla JS. Automated deployment via GitHub Actions, producing a runnable app.jar.",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: [
        "Java",
        "Spring Boot",
        "Maven",
        "JUnit",
        "H2 Database",
        "PayU Integration",
        "CI/CD",
        "TDD",
        "GitHub Actions",
      ],
      liveUrl: "https://github.com/TheWoxPL/pp4",
      githubUrl: "https://github.com/TheWoxPL/pp4",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </div>

        {/* Featured Project */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 md:p-8 mb-16 shadow-xl">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 fill-current" />
            <span className="text-base md:text-lg font-semibold text-gray-700">
              Featured Project
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {featuredProject.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                {featuredProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {featuredProject.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-600 text-sm md:text-base"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 md:px-3 py-1 bg-white text-gray-700 rounded-full text-xs md:text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={featuredProject.liveUrl}
                  className="btn-primary inline-flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a
                  href={featuredProject.githubUrl}
                  className="btn-secondary inline-flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <Github size={18} />
                  View Code
                </a>
              </div>
            </div>

            <div className="relative flex justify-center order-1 lg:order-2">
              {/* Smartphone Mockup - Responsive Size */}
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[560px] sm:h-[640px] md:h-[720px] lg:h-[780px] bg-gray-900 rounded-[2rem] md:rounded-[3rem] p-1.5 md:p-2 shadow-2xl">
                  {/* Screen */}
                  <div className="w-full h-full bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-8 md:h-12 bg-gray-900 flex items-center justify-between px-4 md:px-8 text-white text-xs md:text-sm z-20">
                      <span>9:41</span>
                      <div className="flex items-center gap-2">
                        <div className="w-4 md:w-6 h-2 md:h-3 border border-white rounded-sm">
                          <div className="w-4/5 h-full bg-white rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* App Content - Responsive Area */}
                    <div className="absolute top-8 md:top-12 left-0 right-0 bottom-4 md:bottom-6 w-full bg-gray-50 flex items-center justify-center">
                      <iframe
                        src={`${featuredProject.liveUrl}?embedded=true`}
                        className="w-full h-full border-0 bg-white phone-iframe-centered"
                        title={featuredProject.title}
                        allow="fullscreen"
                      />
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-1 md:bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-36 h-1 md:h-1.5 bg-gray-900 rounded-full z-20"></div>
                  </div>

                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 md:w-40 h-6 md:h-8 bg-gray-900 rounded-b-2xl md:rounded-b-3xl z-30"></div>
                </div>

                {/* Floating Elements - Hidden on small screens */}
                <div className="hidden sm:block absolute -top-2 md:-top-4 -left-2 md:-left-4 w-6 md:w-8 h-6 md:h-8 bg-blue-500 rounded-full animate-bounce-slow opacity-60"></div>
                <div className="hidden sm:block absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 w-4 md:w-6 h-4 md:h-6 bg-purple-500 rounded-full animate-bounce-slow opacity-60 animation-delay-1s"></div>
                <div className="hidden md:block absolute top-1/2 -right-6 md:-right-8 w-3 md:w-4 h-3 md:h-4 bg-green-500 rounded-full animate-bounce-slow opacity-60 animation-delay-2s"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={16} className="text-white" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github size={16} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
