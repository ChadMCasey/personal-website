import React from "react";
import "./About.css";
import portrait from "../../assets/portrait.png";
import diagonalArrow from "../../assets/arrow-diaganol.svg";

const About = () => {
  return (
    <section className="about">
      <img className="about__avatar" src={portrait} alt="portrait" />
      <h1 className="h1 about__heading">Full Stack Software Engineer</h1>
      <p className="p about__paragraph">
        Hello, my name is Chad. I am a full stack software engineer. I grew up
        in Michigan but have since moved to Arizona. I enjoy frontend and
        backend development as well as UI design.
      </p>
      <div className="about__link-section">
        <a
          className="link-s section-link"
          href="https://github.com/ChadMCasey"
          target="_blank"
        >
          Github
        </a>
        <img className="section-link-arrow" src={diagonalArrow} alt="arrow" />
      </div>
    </section>
  );
};

export default About;
