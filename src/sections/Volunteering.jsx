import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { volunteering } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Volunteering = () => {
  useGSAP(() => {
    // Animate volunteering cards as they come into view
    gsap.utils.toArray(".volunteering-card").forEach((card) => {
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
    gsap.from(".volunteering-container", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".volunteering-container",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      id="volunteering"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Volunteering"
          sub="🤝 Community Service"
        />
        
        <div className="mt-16 volunteering-container">
          <div className="space-y-8 max-w-8xl mx-auto">
            {volunteering.map((volunteer) => (
              <div key={volunteer.title} className="volunteering-card">
                <GlowCard card={volunteer}>
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Section - Organization Info */}
                    <div className="lg:w-1/3 w-full ">
                      <div className="flex items-center gap-4 mb-4">
                        <img 
                          src={volunteer.logoPath} 
                          alt={`${volunteer.organization} logo`} 
                          className="w-16 h-16 object-contain rounded-lg" 
                        />
                        <div>
                          <h3 className="font-semibold text-xl text-white">
                            {volunteer.organizationURL ? (
                              <a 
                                href={volunteer.organizationURL} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-blue-400 transition-colors duration-300"
                              >
                                {volunteer.organization}
                              </a>
                            ) : (
                              volunteer.organization
                            )}
                          </h3>
                          <p className="text-white-50 text-sm">
                            {volunteer.category}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-white-50 mb-4 pl-4">
                        <p>🗓️ {volunteer.date}</p>
                        <p>⏱️ {volunteer.duration}</p>
                      </div>

                      {/* Portfolio Link */}
                      {volunteer.portfolioURL && (
                        <div className="p-4 bg-[#1a1a1a] border border-[#333] rounded-lg">
                          <h4 className="font-semibold text-white mb-2">
                            📊 Portfolio
                          </h4>
                          <p className="text-white-50 text-sm mb-3">
                            {volunteer.portfolioDescription}
                          </p>
                          <a 
                            href={volunteer.portfolioURL} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                          >
                            <span>View Portfolio</span>
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

                    {/* Right Section - Details */}
                    <div className="lg:w-2/3">
                      <h2 className="font-semibold text-2xl text-white mb-4">
                        {volunteer.title}
                      </h2>
                      
                      <p className="text-white-50 mb-6 leading-relaxed">
                        {volunteer.description}
                      </p>

                      {/* Responsibilities */}
                      {volunteer.responsibilities && volunteer.responsibilities.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-white mb-3">
                            🎯 Key Responsibilities
                          </h4>
                          <ul className="list-disc ms-5 space-y-2 text-white-50">
                            {volunteer.responsibilities.map((responsibility, index) => (
                              <li key={index} className="text-sm">
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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

export default Volunteering; 