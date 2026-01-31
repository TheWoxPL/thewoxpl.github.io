import React from "react";
import {
  Code,
  Database,
  Settings,
  Palette,
  GitBranch,
  Monitor,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Skills: React.FC = () => {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      title: t.skills.categories.frontend,
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
      title: t.skills.categories.backend,
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
      title: t.skills.categories.tools,
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
      title: t.skills.categories.design,
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
      title: t.skills.competencies.fullstack.title,
      description: t.skills.competencies.fullstack.description,
      technologies: ["React", "NestJS", "MongoDB", "TypeScript"],
    },
    {
      title: t.skills.competencies.css.title,
      description: t.skills.competencies.css.description,
      technologies: [
        "Tailwind CSS",
        "SCSS",
        "CSS Modules",
        "Styled Components",
      ],
    },
    {
      title: t.skills.competencies.database.title,
      description: t.skills.competencies.database.description,
      technologies: ["MongoDB", "MySQL", "PostgreSQL", "Prisma"],
    },
    {
      title: t.skills.competencies.devops.title,
      description: t.skills.competencies.devops.description,
      technologies: ["Linux", "CI/CD", "Docker", "GitHub Actions"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.skills.title} <span className="gradient-text">{t.skills.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4`}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
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
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span className="font-medium">{skill.name}</span>
                    {skill.featured && (
                      <div className="mt-1">
                        <span className="text-xs opacity-90">{t.skills.coreSkill}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Development Philosophy */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 text-center">
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
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Development Philosophy
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            I believe in writing clean, maintainable code with a focus on user
            experience. My approach combines modern development practices with
            attention to detail, ensuring every project is both functional and
            beautiful.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                Clean Code
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Maintainable and scalable solutions
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                Best Practices
              </div>
              <p className="text-gray-600 dark:text-gray-400">Following industry standards</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                Pixel Perfect
              </div>
              <p className="text-gray-600 dark:text-gray-400">Attention to design details</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
