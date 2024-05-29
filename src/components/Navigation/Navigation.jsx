import React, { useEffect } from "react";
import "./Navigation.css";
import { navigationLinks } from "../../utils/constants";

const Navigation = ({ reference }) => {
  useEffect(() => {
    setTimeout(() => reference.current.classList.add("animateIn"), 200);
  }, []);

  return (
    <nav className="nav display" ref={reference}>
      <ul className="nav__list">
        <li className="nav__li">
          <a className="nav-link nav__link" href="#About">
            Chad Casey
          </a>
        </li>
        {navigationLinks.map((link, i) => {
          return (
            <li className="nav__li nav__li-desktop" key={i}>
              <a className="nav-link nav__link" href={`#${link}`}>
                {link}
              </a>
            </li>
          );
        })}
        <div className="nav__list-mobile">
          {navigationLinks.map((link, i) => {
            return (
              <li className="nav__li nav__li-mobile" key={i}>
                <a className="nav-link nav__link" href={`#${link}`}>
                  {link}
                </a>
              </li>
            );
          })}
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
