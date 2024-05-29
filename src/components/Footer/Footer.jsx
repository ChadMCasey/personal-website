import React from "react";
import "./Footer.css";

const Footer = ({ children, reference }) => {
  return (
    <footer className="footer display" ref={reference}>
      {children}
    </footer>
  );
};

export default Footer;
