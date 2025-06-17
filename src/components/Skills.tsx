import React from "react";
import {
  Code,
  Database,
  Settings,
  Palette,
  GitBranch,
  Monitor,
} from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", featured: true },
        { name: "TypeScript", featured: true },
        { name: "Tailwind CSS", featured: true },
        { name: "SCSS/Sass", featured: true },
        { name: "Responsive Design", featured: true  },
        { name: "JavaScript (ES6+)" },
        { name: "HTML5 & CSS3" },
        { name: "Pixel Perfect" },
      ],
    },
    {
      title: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "NestJS", featured: true },
        { name: "REST APIs", featured: true },
        { name: "MongoDB", featured: true },
        { name: "Express.js"},
        { name: "API Design"},
        { name: "MySQL" },
        { name: "Node.js"},
        { name: "GraphQL" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <Settings className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Linux", featured: true },
        { name: "Git", featured: true },
        { name: "CI/CD", featured: true },
        { name: "VS Code", featured: true  },
        { name: "Docker" },
        { name: "GitHub Actions" },
        { name: "Terminal/Bash" },
        { name: "NPM" },
      ],
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Figma", featured: true },
        { name: "Pixel Perfect", featured: true },
        { name: "UI/UX Design" },
        { name: "Prototyping" },
        { name: "Design Systems" },
      ],
    },
  ];

  const coreCompetencies = [
    {
      title: "Full Stack Development",
      description:
        "End-to-end web application development with modern technologies",
      technologies: ["React", "NestJS", "MongoDB", "TypeScript"],
    },
    {
      title: "Modern CSS Architecture",
      description: "Scalable styling with component-based architecture",
      technologies: [
        "Tailwind CSS",
        "SCSS",
        "CSS Modules",
        "Styled Components",
      ],
    },
    {
      title: "Database Design",
      description: "Efficient database schemas and query optimization",
      technologies: ["MongoDB", "MySQL", "PostgreSQL", "Prisma"],
    },
    {
      title: "DevOps & Deployment",
      description: "Automated workflows and cloud infrastructure",
      technologies: ["Linux", "CI/CD", "Docker", "GitHub Actions"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about modern web technologies and best practices in
            software development
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4`}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`p-3 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                      skill.featured
                        ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <span className="font-medium">{skill.name}</span>
                    {skill.featured && (
                      <div className="mt-1">
                        <span className="text-xs opacity-90">Core Skill</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Development Philosophy */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4">
              <div className="p-3 bg-blue-500 rounded-full">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="p-3 bg-green-500 rounded-full">
                <GitBranch className="w-6 h-6 text-white" />
              </div>
              <div className="p-3 bg-purple-500 rounded-full">
                <Monitor className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Development Philosophy
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            I believe in writing clean, maintainable code with a focus on user
            experience. My approach combines modern development practices with
            attention to detail, ensuring every project is both functional and
            beautiful.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                Clean Code
              </div>
              <p className="text-gray-600">
                Maintainable and scalable solutions
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                Best Practices
              </div>
              <p className="text-gray-600">Following industry standards</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                Pixel Perfect
              </div>
              <p className="text-gray-600">Attention to design details</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
