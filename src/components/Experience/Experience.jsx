import React from "react";
import "./Experience.css";
import { experienceCards } from "../../utils/constants";

const Experience = ({ reference }) => {
  return (
    <section className="experience display" id="experience" ref={reference}>
      <h2 className="h2 experience__heading">Experience</h2>
      {experienceCards.map((card) => {
        return (
          <div className="experience-card" key={card.id}>
            <p className="subheading experience-card__date">{card.date}</p>
            <h2 className="h2 experience-card__heading">{card.heading}</h2>
            <p className="p experience-card__description">{card.description}</p>
          </div>
        );
      })}
      <div className="section-link-main-container">
        <a
          className="link section-link-main"
          href="https://docs.google.com/document/d/1wkzZOwhGyBNnN_YHL0Fy98u_6eHEuTHIt_VS-fxANsI"
          target="_blank"
        >
          Resume
          <span className="section-link-main__arrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default Experience;
