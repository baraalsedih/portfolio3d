import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    // Animate the title and subtitle
    gsap.from(".about-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 80%",
      },
    });

    // Animate the main content
    gsap.from(".about-content", {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
      },
    });

    // Animate the toolbox sections
    gsap.utils.toArray(".toolbox-section").forEach((section, index) => {
      gsap.from(section, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4 + index * 0.1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section
      id="about"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="About Me"
          className="about-title"
        />

        <div className="about-content mt-16 max-w-6xl mx-auto">
          {/* Main Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-1xl md:text-2xl font-semibold mb-6 text-white-50">
              Full-Stack Developer | AI/ML Engineer | React, Next.js, Node.js, NestJS, Spring Boot | Python, Flask, TensorFlow, PyTorch, LangChain, SQL | I Build AI-Integrated Web Apps
            </h2>
          </div>

          {/* Main Description */}
          <div className="mb-16">
            <p className="text-white-50 text-lg leading-relaxed text-left max-w-4xl mx-auto">
              👋 I'm a Full-Stack Developer & AI/ML Engineer with a unique ability to build intelligent software products from the ground up.
              <br />
              <br />
              I specialize in designing and developing full-stack web applications — from database modeling and system architecture to frontend/backend implementation and production-ready deployment.
              <br />
              <br />
              On the data side, I build end-to-end machine learning pipelines, starting from data extraction and preprocessing, through model training, evaluation, fine-tuning, and finally to deployment and integration with web applications.
              <br />
              <br />
              I have practical experience with modern AI technologies including RAG (Retrieval-Augmented Generation), LangChain, fine-tuning LLMs, AI API integrations, and embedding intelligent features directly into web products.
            </p>
          </div>

          {/* Toolbox Section */}
          <div className="toolbox-section">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white-50">
              💡 My Toolbox
            </h3>
            
            <div className="lg:columns-3 md:columns-2 columns-1">
              {/* Languages & Tools */}
              <GlowCard card={{ review: "Languages & Tools" }} index={0}>
                <div className="space-y-2">
                  {["Python", "JavaScript", "TypeScript", "Spring Boot", "SQL", "React", "Next.js", "Node.js", "NestJS", "Flask"].map((tool, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-50 rounded-full"></div>
                      <span className="text-white-50">{tool}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>

              {/* AI/ML Frameworks */}
              <GlowCard card={{ review: "AI/ML Frameworks" }} index={1}>
                <div className="space-y-2">
                  {["TensorFlow", "PyTorch", "scikit-learn", "LangChain"].map((framework, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-50 rounded-full"></div>
                      <span className="text-white-50">{framework}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>

              {/* Databases */}
              <GlowCard card={{ review: "Databases" }} index={2}>
                <div className="space-y-2">
                  {["MySQL", "MongoDB", "PostgreSQL", "SQLite", "Firebase", "Supabase"].map((db, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-50 rounded-full"></div>
                      <span className="text-white-50">{db}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>

              {/* Data Analysis */}
              <GlowCard card={{ review: "Data Analysis" }} index={3}>
                <div className="space-y-2">
                  {["Pandas", "NumPy", "Matplotlib", "Power BI", "Excel"].map((tool, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-50 rounded-full"></div>
                      <span className="text-white-50">{tool}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>

              {/* DevOps & Deployment */}
              <GlowCard card={{ review: "DevOps & Deployment" }} index={4}>
                <div className="space-y-2">
                  {["Docker", "Git", "CI/CD", "Cloud Integration", "AWS"].map((tool, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-50 rounded-full"></div>
                      <span className="text-white-50">{tool}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </div>
          </div>

          {/* Final Statement */}
          <div className="toolbox-section mt-12 text-center">
            <p className="text-xl md:text-2xl text-white-50 font-medium leading-relaxed">
              I build intelligent, data-driven applications that combine powerful AI capabilities with seamless full-stack experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 