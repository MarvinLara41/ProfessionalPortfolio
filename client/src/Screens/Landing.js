import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faNode,
  faGithub,
  faBitcoin,
} from "@fortawesome/free-brands-svg-icons";
import "animate.css";

export default function LandingScreen() {
  return (
    <div className="landing">
      <div className="name animate__animated animate__fadeIn  animate__delay-1s">
        <h1>Marvin Lara</h1>
        <h4>Full Stack Developer</h4>
      </div>
      <div className="landing-icons">
        <FontAwesomeIcon
          icon={faReact}
          size="3x"
          className="animate__animated animate__fadeIn  animate__delay-1s"
        />
        <FontAwesomeIcon
          icon={faJsSquare}
          size="3x"
          className="animate__animated animate__fadeIn  animate__delay-2s"
        />
        <FontAwesomeIcon
          icon={faNode}
          size="3x"
          className="animate__animated animate__fadeIn  animate__delay-3s"
        />
        <a>
          <FontAwesomeIcon
            icon={faGithub}
            size="3x"
            className="animate__animated animate__fadeIn  animate__delay-4s"
          />
        </a>
        <FontAwesomeIcon
          icon={faBitcoin}
          size="3x"
          className="animate__animated animate__fadeIn  animate__delay-5s"
        />
      </div>
    </div>
  );
}
