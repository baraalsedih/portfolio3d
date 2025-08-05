import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { languages } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Languages = () => {
  useGSAP(() => {
    // Animate language cards as they come into view
    gsap.utils.toArray(".language-card").forEach((card) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });

    // Animate the container
    gsap.from(".languages-container", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".languages-container",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      id="languages"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Languages"
          sub="🌍 Communication Skills"
        />
        
        <div className="mt-16 languages-container">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {languages.map((language) => (
              <div key={language.name} className="language-card">
                <GlowCard card={language}>
                  <div className="p-6">
                    {/* Language Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">
                        {language.flag}
                      </div>
                      <div>
                        <h3 className="font-semibold text-2xl text-white">
                          {language.name}
                        </h3>
                        <p className="text-blue-400 font-medium">
                          {language.level}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white-50 mb-4 leading-relaxed">
                      {language.description}
                    </p>

                    {/* Certification (if exists) */}
                    {language.certification && (
                      <div className="mb-4 p-4 bg-[#1a1a1a] border border-[#333] rounded-lg">
                        <h4 className="font-semibold text-white mb-2">
                          📜 Certification
                        </h4>
                        <p className="text-white-50 text-sm mb-2">
                          {language.certification.name}
                        </p>
                        <div className="flex items-center justify-between text-xs text-white-50">
                          <span>{language.certification.issuer}</span>
                          <span>{language.certification.date}</span>
                        </div>
                        <a 
                          href={language.certification.credentialURL} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium mt-2"
                        >
                          <span>View Certificate</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )}

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-white mb-3">
                        💬 Language Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {language.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-[#1a1a1a] border border-[#333] rounded-full text-white-50 text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages; 