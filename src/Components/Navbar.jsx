import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ScrollLink
          to="home"
          smooth={true}
          duration={800}
          className="nav-logo"
          onClick={handleClick}
        >
          TCE-MDU
        </ScrollLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <ScrollLink
              to="hero_section"
              smooth={true}
              duration={800}
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="about"
              smooth={true}
              duration={800}
              className="nav-links"
              offset={-150}
              onClick={handleClick}
            >
              About
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="tracks"
              smooth={true}
              duration={800}
              offset={-150}
              className="nav-links"
              onClick={handleClick}
            >
              Tracks
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="timeline"
              smooth={true}
              duration={800}
              offset={-150}
              className="nav-links"
              onClick={handleClick}
            >
              Timeline
            </ScrollLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
