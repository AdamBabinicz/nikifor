import React from "react";
import { Link } from "react-router-dom";

function ServicesSection({ image, title, text, text1 }) {
  return (
    <div className="ServicesSection">
      <div className="service">
        <div className="service-content">
          <img src={image} alt="Nikifor" />
          <h5 className="s-title">{title}</h5>
          <p className="s-text">{text}</p>
          <p className="s-text1">{text1}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
