import "./Education.css";
import { educationCards } from "../../utils/constants";

const Education = ({ reference }) => {
  return (
    <section className="education display" id="education" ref={reference}>
      <h2 className="h2 education__heading">Education</h2>
      {educationCards.map((card) => {
        return (
          <div className="education-card" key={card.id}>
            <p className="subheading education-card__date">{card.date}</p>
            <h2 className="h2 education-card__heading">{card.heading}</h2>
            <p className="p education-card__description">{card.description}</p>
          </div>
        );
      })}
      <div className="section-link-main-container">
        <a
          className="link section-link-main"
          href="https://www.linkedin.com/in/chadcaseyswe/"
          target="_blank"
        >
          LinkedIn
          <span className="section-link-main__arrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default Education;
