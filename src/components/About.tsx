import React from "react";
import { Code, Palette, Zap } from "lucide-react";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "../hooks/useScrollAnimation";

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [textRef, textVisible] = useStaggeredAnimation(200);
  const [statsRef, statsVisible] = useStaggeredAnimation(400);
  const [featuresRef, featuresVisible] = useStaggeredAnimation(600);
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code following best practices and industry standards.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Modern Design",
      description:
        "Creating beautiful, intuitive user interfaces with attention to detail and user experience.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and cross-browser compatibility.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 scroll-fade-in ${
            titleVisible ? "animate" : ""
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Me</span>
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
            <h3 className="text-2xl font-semibold text-gray-900">
              Passionate Developer with a Vision
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a dedicated frontend developer with many years of
              experience creating digital solutions while creating own projects. My
              journey started with curiosity about how websites work and has
              evolved into a passion for crafting exceptional user experiences.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in React, NestJS, and modern web technologies. When
              I'm not coding, you'll find me exploring new technologies,
              or focusing on personal projects that challenge my skills, or on my personal hobbies.
            </p>

            {/* Stats */}
            <div
              ref={statsRef}
              className={`grid grid-cols-3 gap-6 pt-8 scroll-fade-in ${
                statsVisible ? "animate" : ""
              }`}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3+</div>
                <div className="text-gray-600">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-gray-600">Dedication</div>
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
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
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
