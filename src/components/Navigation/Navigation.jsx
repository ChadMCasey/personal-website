import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__links nav__desktop">
        <a className="nav-link nav__link" href="#">
          Chad Casey
        </a>
        <a className="nav-link nav__link" href="#about">
          Overview
        </a>
        <a className="nav-link nav__link" href="#skillset">
          Skillset
        </a>
        <a className="nav-link nav__link" href="#portfolio">
          Portfolio
        </a>
        <a className="nav-link nav__link" href="#experience">
          Experience
        </a>
        <a className="nav-link nav__link" href="#education">
          Education
        </a>
      </ul>
    </nav>
  );
};

export default Navigation;
