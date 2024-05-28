import React from "react";
import "./HireMe.css";
import email from "../../assets/email.png";

const HireMe = () => {
  return (
    <section className="hireme">
      <div className="hireme__card">
        <div className="hireme__card-left">
          <h2 className="h2 hireme__heading">Interested in hiring me?</h2>
          <p className="p hireme__description">
            If you need assistance with frontend, backend, or web design work,
            submit your email here!
          </p>
          <div className="hireme__input-container">
            <input type="email" className="hireme__input" />
            <button className="h2 hireme__submit">Submit</button>
          </div>
        </div>
        <div className="hireme__card-right">
          <img className="hireme__img" src={email} alt="email" />
        </div>
      </div>
    </section>
  );
};

export default HireMe;
