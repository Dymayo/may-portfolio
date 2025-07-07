import React, { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

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
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Marhabteen" />
            </div>
            <div className="text-content">
              <h2>Marhabteen – Rental App Design System</h2>
              <p className="text-[#333a7d] md:text-xl">
                A user-centered app powered by a clean, scalable design system
                built from scratch.
              </p>
            </div>
          </div>
          {/* Right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Replicaide" />
              </div>
              <h2>Replicaide – AI Startup</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project3.png" alt="CV-Builder" />
              </div>
              <h2>May’s Portfolio </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            to="/projects"
            className="xl:mt-2 mt-6 px-6 py-3 bg-[#7600BB] text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition"
          >
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
