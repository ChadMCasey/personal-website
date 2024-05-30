import React, { useEffect } from "react";
import "./About.css";
import portrait from "../../assets/portrait.png";
import diagonalArrow from "../../assets/arrow-diaganol.svg";
import downArrow from "../../assets/down-arrow.png";

const About = ({ reference }) => {
  useEffect(() => {
    setTimeout(() => reference.current.classList.add("animateIn"), 800);
  }, []);

  return (
    <section className="about display" id="About" ref={reference}>
      <img className="about__avatar" src={portrait} alt="portrait" />
      <div className="about__heading-section">
        <h1 className="h1 about__heading">Full Stack Software Engineer</h1>

        <a className="about__scroll-prompt" href="#Skillset">
          <img className="about__down-arrow" src={downArrow} alt="down arrow" />
        </a>
      </div>
      <p className="p about__paragraph">
        Hello, my name is Chad. I am a full stack software engineer. I grew up
        in Michigan but have since moved to Arizona. I enjoy frontend and
        backend development as well as UI design.
      </p>
      <div className="about__link-section">
        <a
          className="section-link-container"
          href="https://github.com/ChadMCasey"
          target="_blank"
        >
          <p className="link-s section-link">Github</p>
          <img className="section-link-arrow" src={diagonalArrow} alt="arrow" />
        </a>
      </div>
    </section>
  );
};

export default About;
