import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <Link to="/" className="logo">
          May's Portfolio
        </Link>
        <nav className="desktop">
          <ul>
            <li className="group">
              <Link to="/">
                <span>Home</span> <span className="underline" />
              </Link>
            </li>
            <li className="group">
              <Link to="/about">
                <span>About</span> <span className="underline" />
              </Link>
            </li>
            <li className="group">
              <Link to="/projects">
                <span>Projects</span> <span className="underline" />
              </Link>
            </li>
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
