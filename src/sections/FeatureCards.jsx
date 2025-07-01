import React from "react";
import { abilities } from "../constants";
import SpotlightCard from "../components/SpotlightCard";

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div key={title}>
            <SpotlightCard
              className="rounded-xl p-8 flex flex-col gap-4 h-full "
              spotlightColor="rgb(148 136 255)"
            >
              <div className="size-14 flex items-center justify-center rounded-full">
                <img src={imgPath} alt={title} />
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
