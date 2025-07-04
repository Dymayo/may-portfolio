import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import About from "./sections/About";
import Projects from "./sections/Projects";
import FeatureCards from "./sections/FeatureCards";
import EperienceSection from "./sections/EperienceSection";
import Experience from "./sections/EperienceSection";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeatureCards />
              <ShowcaseSection />
              <Experience />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
