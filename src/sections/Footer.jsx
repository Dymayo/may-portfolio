import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start  items-center">
          <a href="/">Visit my blog at joseign</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
              href={img.url}
              key={img.name}
            >
              <img src={img.imgPath} alt={img.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} May | Joseign. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
