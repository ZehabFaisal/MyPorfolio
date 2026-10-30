import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar"> 
      <div className="navbar-logo"> My<span>Portfolio. </span> </div>
      <div className="menu-icon" onClick={handleToggle}>
        <span className={ menuOpen ? "bar active" : "bar"}> </span>
        <span className={ menuOpen ? "bar active" : "bar"}> </span>
        <span className={ menuOpen ? "bar active" : "bar"}> </span>
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="home" smooth duration={500} offset={-70} className="nav-link" onClick={handleNavClick}>
          Home
        </Link>

        <Link to="about" smooth duration={500} offset={-50} className="nav-link" onClick={handleNavClick}>
          About Me
        </Link>

        <Link to="projects" smooth duration={500} offset={-50} className="nav-link" onClick={handleNavClick}>
          Projects
        </Link>

        <Link to="experience" smooth duration={500} offset={-50} className="nav-link" onClick={handleNavClick}>
          Experience
        </Link>

        <Link to="education" smooth duration={500} offset={-50} className="nav-link" onClick={handleNavClick}>
          Education
        </Link>

        <Link to="achievements" smooth duration={500} offset={-50} className="nav-link" onClick={handleNavClick}>
          Achievements
        </Link>

        <Link to="contact" smooth duration={500} offset={-50} className="nav-link" onClick={handleNavClick}>
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;