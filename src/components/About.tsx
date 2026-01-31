import React from "react";
import { Code, Palette, Zap } from "lucide-react";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "../hooks/useScrollAnimation";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const [titleRef, titleVisible] = useScrollAnimation();
  const [textRef, textVisible] = useStaggeredAnimation(200);
  const [statsRef, statsVisible] = useStaggeredAnimation(400);
  const [featuresRef, featuresVisible] = useStaggeredAnimation(600);
  
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t.about.features.cleanCode.title,
      description: t.about.features.cleanCode.description,
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: t.about.features.modernDesign.title,
      description: t.about.features.modernDesign.description,
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t.about.features.performance.title,
      description: t.about.features.performance.description,
    },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 scroll-fade-in ${
            titleVisible ? "animate" : ""
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.about.title} <span className="gradient-text">{t.about.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div
            ref={textRef}
            className={`space-y-6 scroll-slide-left ${
              textVisible ? "animate" : ""
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {t.about.subtitle}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.about.description2}
            </p>

            {/* Stats */}
            <div
              ref={statsRef}
              className={`grid grid-cols-3 gap-6 pt-8 scroll-fade-in ${
                statsVisible ? "animate" : ""
              }`}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">20+</div>
                <div className="text-gray-600 dark:text-gray-400">{t.about.stats.projects}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                <div className="text-gray-600 dark:text-gray-400">{t.about.stats.experience}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                <div className="text-gray-600 dark:text-gray-400">{t.about.stats.dedication}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div
            ref={featuresRef}
            className={`space-y-8 scroll-slide-right ${
              featuresVisible ? "animate" : ""
            }`}
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                  <div className="text-blue-600 dark:text-blue-400">{feature.icon}</div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
