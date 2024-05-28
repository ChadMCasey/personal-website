import React from "react";
import "./Links.css";
import diagonalArrow from "../../assets/arrow-diaganol.svg";
import { footerLinks } from "../../utils/constants";

const Links = () => {
  return (
    <div className="links">
      <p className="p links__heading">Links</p>
      <ul className="links__list">
        {footerLinks.map((link) => {
          return (
            <div className="section-link-container" key={link.id}>
              <a
                className="link-s section-link"
                href={link.url}
                target="_blank"
              >
                {link.name}
              </a>
              <img
                className="section-link-arrow"
                src={diagonalArrow}
                alt="arrow"
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;
