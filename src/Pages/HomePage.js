import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Apolonuisz&nbsp;Drowniak <br />
          <span>prymitywista</span>
        </h1>
        <p className="h-sub-text">1895 - 1968</p>
        <div className="icons">
          <Link
            to="//www.facebook.com/NikiforArt"
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </Link>
          <Link
            to="//twitter.com/zibi20201/status/998356653509619717"
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </Link>
          <Link
            to="//www.youtube.com/watch?v=zhi5dh-YIXc"
            target="_blank"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faYoutube} className="icon" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
