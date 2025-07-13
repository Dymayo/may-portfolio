import SplitText from "../components/SplitText";
const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p className="text-white">{sub}</p>
      </div>
      <div>
        <SplitText
          text={title}
          className="font-semibold md:text-5xl text-3xl "
          delay={80}
          duration={0.3}
          ease="poer3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
    </div>
  );
};

export default TitleHeader;
