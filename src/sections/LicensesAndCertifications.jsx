import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { licensesAndCertifications } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const LicensesAndCertifications = () => {
  useGSAP(() => {
    // Animate certification cards as they come into view
    gsap.utils.toArray(".certification-card").forEach((card) => {
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

    // Animate the grid container
    gsap.from(".certifications-grid", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".certifications-grid",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      id="certifications"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Licenses & Certifications"
          sub="🏆 Professional Credentials"
        />
        
        <div className="mt-16 certifications-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {licensesAndCertifications.map((cert) => (
              <div key={cert.name} className="certification-card">
                <GlowCard card={cert}>
                  <div className="flex flex-col h-full">
                    {/* Header with logo and basic info */}
                    <div className="flex items-start gap-4 mb-4">
                      <img 
                        src={cert.logoPath} 
                        alt={`${cert.issuer} logo`} 
                        className="w-12 h-12 object-contain rounded-lg flex-shrink-0" 
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg text-white mb-1 line-clamp-2">
                          {cert.name}
                        </h3>
                        <p className="text-white-50 text-sm">
                          {cert.issuerURL ? (
                            <a 
                              href={cert.issuerURL} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-blue-400 transition-colors duration-300"
                            >
                              {cert.issuer}
                            </a>
                          ) : (
                            cert.issuer
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Date and Credential ID */}
                    <div className="flex justify-between items-center mb-3 text-sm text-white-50">
                      <span>🗓️ {cert.date}</span>
                      {cert.credentialID && (
                        <span className="text-xs bg-[#1a1a1a] px-2 py-1 rounded">
                          ID: {cert.credentialID}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-white-50 text-sm mb-4 flex-1">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="mb-4">
                        <p className="text-[#839CB5] font-semibold text-xs mb-2">
                          Skills Covered
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-[#1a1a1a] border border-[#333] rounded text-xs text-white-50"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Credential Link */}
                    {cert.credentialURL && (
                      <div className="mt-auto">
                        <a 
                          href={cert.credentialURL} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                        >
                          <span>View Credential</span>
                          <svg 
                            className="w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                            />
                          </svg>
                        </a>
                      </div>
                    )}
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

export default LicensesAndCertifications; 