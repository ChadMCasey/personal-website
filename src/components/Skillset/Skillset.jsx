import React from "react";
import "./Skillset.css";
import { skillsetIcons } from "../../utils/constants";

const Skillset = () => {
  return (
    <section className="skillset" id="skillset">
      <h2 className="h2 skillset__heading">Skillset</h2>
      <ul className="skillset__list">
        {skillsetIcons.map((obj) => (
          <img
            className="skillset__icon"
            src={obj.image}
            alt={obj.name}
            key={obj.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Skillset;
