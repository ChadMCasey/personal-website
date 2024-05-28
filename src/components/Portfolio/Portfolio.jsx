import React from "react";
import "./Portfolio.css";
import diagonalArrow from "../../assets/arrow-diaganol.svg";
import { portfolioCards } from "../../utils/constants";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="h2 portfolio__heading">Portfolio</h2>
      {portfolioCards.map((card) => {
        return (
          <a className="card" href={card.link} target="_blank" key={card.id}>
            <div className="card-left">
              <p className="subheading card__suheading">{card.date}</p>
              <h2 className="h2 card__heading">{card.heading}</h2>
              <p className="subheading card__suheading">{card.subheading}</p>
              <p className="p card__description">{card.description}</p>
              <div className="section-link-container">
                <p className="link-s section-link" href={card.link}>
                  Try it out
                </p>
                <img
                  className="section-link-arrow"
                  src={diagonalArrow}
                  alt="arrow"
                />
              </div>
            </div>
            <div className="card__img-container">
              <img className="card__img" src={card.image} alt={card.heading} />
            </div>
            <div className="card__overlay"></div>
          </a>
        );
      })}
      <div className="section-link-main-container">
        <a
          className="link section-link-main"
          href="https://github.com/ChadMCasey"
          target="_blank"
        >
          View All Projects
          <span className="section-link-main__arrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
