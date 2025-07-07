import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { abilities } from "../constants";
import SpotlightCard from "../components/SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

const FeatureCards = () => {
  useGSAP(() => {
    gsap.utils.toArray(".feature-card").forEach((card) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div key={title} className="feature-card">
            <SpotlightCard
              className="rounded-xl p-8 flex flex-col gap-4 h-full "
              spotlightColor="rgb(148 136 255)"
            >
              <div className="size-14 flex items-center justify-center rounded-full">
                <img className="w-full h-full" src={imgPath} alt={title} />
              </div>
              <h3 className="text-black text-2xl font-semibold mt-2">
                {title}
              </h3>
              <p className="text-[#333a7d] text-lg">{desc}</p>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
