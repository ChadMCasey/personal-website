import React from "react";
import "./About.css";
import portrait from "../../assets/portrait.png";
import diagonalArrow from "../../assets/arrow-diaganol.svg";
import downArrow from "../../assets/down-arrow.png";

const About = ({ reference }) => {
  return (
    <section className="about" id="about" ref={reference}>
      <img className="about__avatar" src={portrait} alt="portrait" />
      <div className="about__heading-section">
        <h1 className="h1 about__heading">Full Stack Software Engineer</h1>

        <a className="about__scroll-prompt" href="#skillset">
          <img className="about__down-arrow" src={downArrow} alt="down arrow" />
        </a>
      </div>
      <p className="p about__paragraph">
        Hello, my name is Chad. I am a full stack software engineer. I grew up
        in Michigan but have since moved to Arizona. I enjoy frontend and
        backend development as well as UI design.
      </p>
      <div className="about__link-section">
        <div
          className="section-link-container"
          href="https://github.com/ChadMCasey"
        >
          <p className="link-s section-link">Github</p>
          <img className="section-link-arrow" src={diagonalArrow} alt="arrow" />
        </div>
      </div>
    </section>
  );
};

export default About;
