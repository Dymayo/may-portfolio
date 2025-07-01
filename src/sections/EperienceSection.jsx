import { expCards } from "../constants";
const EperienceSection = () => {
  return (
    <section
      id="experince"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:ox-20 px-5">
        <div className="font-semibold md:text-5xl text-3xl text-center">
          My Journey
        </div>
        <div className="mt-32 relative">
          <div className="relatie z-50 xl:space-y32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp card-wrapper">
                {card.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EperienceSection;
