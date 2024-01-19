import React from "react";
import { Link } from "react-router-dom";

import arrowIcon from "./../../assets/images/arrow-icon.png";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__body">
        <div className="footer__button">
          <Link to="/readNext">Читать далее</Link>
          <img src={arrowIcon} alt="arrowIcon" />
        </div>
      </div>
    </footer>
  );
}
