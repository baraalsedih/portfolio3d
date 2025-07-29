import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { education } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useGSAP(() => {
    // Loop through each education card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray(".education-card").forEach((card) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: "left left",
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: "top 80%",
        },
      });
    });

    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to(".timeline", {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "bottom bottom",
      // Animate the timeline height over 1 second
      ease: "power1.inOut",
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Loop through each educationText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray(".educationText").forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 60%",
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section
      id="education"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Education"
          sub="🎓 My Academic Journey"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {education.map((edu) => (
              <div key={edu.degree} className="education-card-wrapper">
                <div className="xl:w-2/6">
                  {edu.institutionURL ? (
                    <a 
                      href={edu.institutionURL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block hover:scale-105 transition-transform duration-300"
                    >
                      <GlowCard card={edu}>
                        <div className="flex items-center gap-4">
                          <img 
                            src={edu.logoPath} 
                            alt="institution-logo" 
                            className="w-20 h-20 object-cover rounded-lg" 
                          />
                          <span className="text-lg font-semibold text-white">
                            {edu.institution}
                          </span>
                        </div>
                      </GlowCard>
                    </a>
                  ) : (
                    <GlowCard card={edu}>
                      <div className="flex items-center gap-4">
                        <img 
                          src={edu.logoPath} 
                          alt="institution-logo" 
                          className="w-20 h-20 object-cover rounded-lg" 
                        />
                        <span className="text-lg font-semibold text-white">
                          {edu.institution}
                        </span>
                      </div>
                    </GlowCard>
                  )}
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="educationText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={edu.logoPath} alt="institution-logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{edu.degree}</h1>
                        <p className="my-2 text-white-50">
                          🗓️&nbsp;{edu.date}
                        </p>
                        <p className="my-2 text-white-50">
                          📍&nbsp;{edu.location}
                        </p>
                        <p className="my-2 text-white-50">
                          📊&nbsp;GPA: {edu.gpa}
                        </p>
                        <p className="my-5 text-white-50 italic">
                          {edu.description}
                        </p>
                        
                        {edu.courses && edu.courses.length > 0 && (
                          <div className="mt-5">
                            <p className="text-[#839CB5] font-semibold mb-3">
                              📚 Key Courses
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {edu.courses.map((course, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-[#1a1a1a] border border-[#333] rounded-full text-sm text-white-50"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {edu.achievements && edu.achievements.length > 0 && (
                          <div className="mt-5">
                            <p className="text-[#839CB5] font-semibold mb-3">
                              🏆 Achievements
                            </p>
                            <ul className="list-disc ms-5 text-white-50">
                              {edu.achievements.map((achievement, index) => (
                                <li key={index} className="text-lg">
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 