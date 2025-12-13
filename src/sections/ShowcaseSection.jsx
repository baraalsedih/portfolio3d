import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="project">
                <div className="image-wrapper">
                  <img src="/images/predictive-model.png" alt="Predictive Analytics Model" loading="lazy" />
                </div>
                <div className="text-content">

                  <h2>Network Intrusion – 99.5% accuracy (CNN+LSTM) </h2>
                  <p className="text-sm text-white-50 md:text-xl">Data preprocessing, training, evaluation, real-time simulation, and FastAPI deployment</p>
                </div>
              </div>
            </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* New AI/ML projects added first */}
            <div className="project">
              <div className="image-wrapper bg-[#E6F7FF]">
                <img
                  src="/images/chatbot.png"
                  alt="LLM-Powered AI Agent"
                  loading="lazy"
                />
              </div>
              <h2>Mental Health Chatbot</h2>
              <p className="text-sm text-white-50 mt-2">Fine-tuned Llama 3.3B + Streamlit UI</p>
            </div>

            <div className="project">
              <div className="image-wrapper bg-[#F0FFF4]">
                <img src="/images/n8n-automation.png" alt="n8n AI Workflow" loading="lazy" />
              </div>
              <h2>Email Cleaner & Priority Sort AI Agent (n8n + Google Gemini)</h2>
              <p className="text-sm text-white-50 mt-2">Auto-classifies emails, applies Gmail labels, sends Discord alerts</p>
            </div>

            {/* Original projects kept below, unchanged */}
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/chatApp.png"
                  alt="Real-Time Chat App"
                  loading="lazy"
                />
              </div>
              <h2>Real-Time Chat App</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/HomePage.png" alt="FreeDevelopersCamp" loading="lazy" />
              </div>
              <h2>FreeDevelopersCamp - A Learning Platform</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
