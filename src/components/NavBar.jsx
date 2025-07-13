import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 10;
          setScrolled(isScrolled);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <Link to="/" className="logo">
          May's Portfolio
        </Link>
        <button
          className="menu-toggle lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={menuOpen ? "/images/x.svg" : "/images/menu.svg"}
            alt="menu"
          />
        </button>
        {/* <nav className="desktop">
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
        </nav> */}

        <a href="#contact" className="contact-btn group hidden sm:flex">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
      <div
        className={`mobile-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <nav className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
          <ul>
            <li className="group">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <span>Home</span> <span className="underline" />
              </Link>
            </li>
            <li className="group">
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                <span>About</span> <span className="underline" />
              </Link>
            </li>
            <li className="group">
              <Link to="/projects" onClick={() => setMenuOpen(false)}>
                <span>Projects</span> <span className="underline" />
              </Link>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
