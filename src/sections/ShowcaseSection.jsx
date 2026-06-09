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
                <img src="/images/vigilant-mlops-v2.png" alt="VigilantMLOps Platform" loading="lazy" />
              </div>
              <div className="text-content">
                <h2>VigilantMLOps — Production MLOps & LLMOps Observability Platform</h2>
                <p className="text-sm text-white-50 md:text-xl">FastAPI · PostgreSQL · ClickHouse · React 18 · TypeScript · TanStack Query · Docker</p>
                <p className="text-sm text-white-50 md:text-base mt-2">
                  Multi-service platform for real-time ML model and LLM monitoring. Dual-database architecture (PostgreSQL + ClickHouse) for OLTP and OLAP workloads. Covers drift detection, model performance tracking, LLM trace observability, and automated alerting — built across three repos.
                </p>
                <div className="flex gap-3 mt-3 flex-wrap">
                  <a href="https://vigilant-ui.duckdns.org" target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-full">Live Demo ↗</a>
                  <a href="https://github.com/VigilantMLOps/vigilant-api" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300 underline">vigilant-api ↗</a>
                  <a href="https://github.com/VigilantMLOps/vigilant-ui" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300 underline">vigilant-ui ↗</a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#EEF2FF]">
                <img src="/images/vigilant-rag.png" alt="vigilant-rag RAG System" loading="lazy" />
              </div>
              <h2>vigilant-rag — Production RAG System over Obsidian Notes</h2>
              <p className="text-sm text-white-50 mt-2">FastAPI · Qdrant · Ollama · Hybrid Search (BM25 + dense) · Cross-encoder reranking · LLM traces → ClickHouse</p>
              <a href="https://github.com/VigilantMLOps/vigilant-rag" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300 underline mt-1 block">vigilant-rag ↗</a>
            </div>

            <div className="project">
              <div className="image-wrapper bg-[#E6F7FF]">
                <img src="/images/Network_ML_System.png" alt="Network Intrusion Detection System" loading="lazy" />
              </div>
              <h2>Machine Learning-Based Threat Detection System (End-to-End Pipeline)</h2>
              <p className="text-sm text-white-50 mt-2">Python · Scikit-Learn · FastAPI · Pandas · Docker — 99.5% accuracy, zero false positives. Served via FastAPI as a deployable system.</p>
            </div>

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

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#F0FFF4]">
                <img src="/images/n8n-automation.png" alt="n8n AI Workflow" loading="lazy" />
              </div>
              <h2>Email Cleaner & Priority Sort AI Agent (n8n + Google Gemini)</h2>
              <p className="text-sm text-white-50 mt-2">Auto-classifies emails, applies Gmail labels, sends Discord alerts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
