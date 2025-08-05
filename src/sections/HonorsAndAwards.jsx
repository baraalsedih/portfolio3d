import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { honorsAndAwards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const HonorsAndAwards = () => {
  useGSAP(() => {
    // Animate award cards as they come into view
    gsap.utils.toArray(".award-card").forEach((card) => {
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
    gsap.from(".awards-container", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".awards-container",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      id="awards"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Honors & Awards"
          sub="🏆 Achievements & Recognition"
        />
        
        <div className="mt-16 awards-container">
          <div className="space-y-8 max-w-6xl mx-auto">
            {honorsAndAwards.map((award) => (
              <div key={award.title} className="award-card">
                <GlowCard card={award}>
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Section - Award Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-4">
                        <img 
                          src={award.logoPath} 
                          alt={`${award.issuer} logo`} 
                          className="w-16 h-16 object-contain rounded-lg" 
                        />
                        <div>
                          <h3 className="font-semibold text-xl text-white">
                            {award.issuerURL ? (
                              <a 
                                href={award.issuerURL} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-blue-400 transition-colors duration-300"
                              >
                                {award.issuer}
                              </a>
                            ) : (
                              award.issuer
                            )}
                          </h3>
                          <p className="text-white-50 text-sm">
                            {award.category}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-white-50 mb-4">
                        <p>🗓️ {award.date}</p>
                        <p>🏆 {award.category}</p>
                      </div>

                      {/* Associated With */}
                      {award.associatedWith && (
                        <div className="flex items-center gap-3 p-3 bg-[#1a1a1a] border border-[#333] rounded-lg">
                          <img 
                            src={award.associatedWithLogo} 
                            alt={`${award.associatedWith} logo`} 
                            className="w-8 h-8 object-contain" 
                          />
                          <span className="text-white-50 text-sm">
                            Associated with{" "}
                            {award.associatedWithURL ? (
                              <a 
                                href={award.associatedWithURL} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                              >
                                {award.associatedWith}
                              </a>
                            ) : (
                              award.associatedWith
                            )}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Right Section - Award Details */}
                    <div className="lg:w-2/3">
                      <h2 className="font-semibold text-2xl text-white mb-4">
                        {award.title}
                      </h2>
                      
                      <p className="text-white-50 mb-4 leading-relaxed">
                        {award.description}
                      </p>

                      {/* Event Details (if exists) */}
                      {award.eventDetails && (
                        <p className="text-white-50 mb-4 leading-relaxed">
                          {award.eventDetails}
                        </p>
                      )}

                      {/* Technical Details (if exists) */}
                      {award.technicalDetails && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-white mb-2">
                            🔧 Technical Implementation
                          </h4>
                          <ul className="list-disc ms-5 space-y-1 text-white-50 text-sm">
                            {award.technicalDetails.map((detail, index) => (
                              <li key={index}>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Achievements */}
                      {award.achievements && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-white mb-2">
                            🎯 Key Achievements
                          </h4>
                          <ul className="list-disc ms-5 space-y-1 text-white-50 text-sm">
                            {award.achievements.map((achievement, index) => (
                              <li key={index}>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Links */}
                      <div className="flex flex-wrap gap-3">
                        {award.linkedinPostURL && (
                          <a 
                            href={award.linkedinPostURL} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                          >
                            <span>🌟 LinkedIn Post</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        {award.githubOrgURL && (
                          <a 
                            href={award.githubOrgURL} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                          >
                            <span>📁 GitHub Organization</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        {award.kaggleNotebookURL && (
                          <a 
                            href={award.kaggleNotebookURL} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                          >
                            <span>📊 Kaggle Notebook</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>

                      {/* Scoreboard Image (if exists) */}
                      {award.scoreboardImage && (
                        <div className="mt-4">
                          <img 
                            src={award.scoreboardImage} 
                            alt="Hackathon Scoreboard" 
                            className="w-full max-w-md rounded-lg border border-[#333]" 
                          />
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

export default HonorsAndAwards; 