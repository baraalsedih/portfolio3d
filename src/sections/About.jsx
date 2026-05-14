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
              ML Engineer at iO Health | Production ML Systems, MLOps & Model Deployment
            </h2>
          </div>

          {/* Main Description */}
          <div className="mb-16">
            <p className="text-white-50 text-lg leading-relaxed text-left max-w-4xl mx-auto">
              ML Engineer with production experience building the systems that make models reliable after training. Specializes in the engineering layer between model development and deployment: model serving, packaging pipelines, observability platforms, CI/CD automation, and API-level evaluation workflows. Currently co-building the MLOps function at a healthcare tech company as a core member of a dedicated MLOps team. Proficient in TensorFlow, Scikit-Learn, PyTorch, and Python across end-to-end ML systems — from data preprocessing and feature engineering through model serving and real-time monitoring.
            </p>
          </div>

          {/* Toolbox Section */}
          <div className="toolbox-section">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white-50">
              💡 My Toolbox
            </h3>
            
            <div className="lg:columns-3 md:columns-2 columns-1">
              {/* Machine Learning */}
              <GlowCard card={{ review: "Machine Learning" }} index={0}>
                <div className="space-y-2">
                  {["TensorFlow", "Scikit-Learn", "PyTorch", "Supervised & Unsupervised Learning", "Neural Networks", "CNN", "Feature Engineering", "Model Evaluation", "Hyperparameter Tuning", "Time Series Forecasting"].map((tool, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-50 rounded-full"></div>
                      <span className="text-white-50">{tool}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>

              {/* MLOps & Production */}
              <GlowCard card={{ review: "MLOps & Production" }} index={1}>
                <div className="space-y-2">
                  {["Model Monitoring", "Data Drift Detection", "Model Serving", "API Evaluation Testing", "Model Packaging", "CI/CD (GitHub Actions)", "Docker", "Weights & Biases (W&B)", "FastAPI", "Streamlit"].map((tool, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-50 rounded-full"></div>
                      <span className="text-white-50">{tool}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>

              {/* Data Engineering */}
              <GlowCard card={{ review: "Data Engineering" }} index={2}>
                <div className="space-y-2">
                  {["Pandas", "NumPy", "Polars", "Data Cleaning", "Feature Engineering", "Exploratory Data Analysis (EDA)", "SQL"].map((tool, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-50 rounded-full"></div>
                      <span className="text-white-50">{tool}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>

              {/* AI & NLP */}
              <GlowCard card={{ review: "AI & NLP" }} index={3}>
                <div className="space-y-2">
                  {["Transformers (Hugging Face)", "LangChain", "Fine-tuning (LLaMA)", "RAG", "OpenAI API"].map((tool, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-50 rounded-full"></div>
                      <span className="text-white-50">{tool}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>

              {/* Infrastructure & Tools */}
              <GlowCard card={{ review: "Infrastructure & Tools" }} index={4}>
                <div className="space-y-2">
                  {["Docker", "AWS", "Git", "Poetry", "Makefile", "PostgreSQL", "MongoDB", "MySQL"].map((tool, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-50 rounded-full"></div>
                      <span className="text-white-50">{tool}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>

              {/* Programming */}
              <GlowCard card={{ review: "Programming" }} index={5}>
                <div className="space-y-2">
                  {["Python", "SQL", "JavaScript/TypeScript", "Java", "C/C++"].map((tool, i) => (
                    <div key={i} className="flex items-center gap-2">
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