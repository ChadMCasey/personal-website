import React from "react";
import "./Portfolio.css";
import { portfolioCards } from "../../utils/constants";

const Portfolio = () => {
  return (
    <section className="portfolio">
      {portfolioCards.map((card) => {
        return (
          <div className="card" key={card.id}>
            <div className="card-left">
              <p className="card__suheading">{card.date}</p>
              <h2 className="h2 card__heading">{card.heading}</h2>
              <p className="subheading card__suheading">{card.subheading}</p>
              <p className="p card__description">{card.description}</p>
            </div>
            <div className="card__img-container">
              <img className="card__img" src={card.image} alt={card.heading} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Portfolio;
