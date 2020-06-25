import React from "react";
import Particles from "react-particles-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faCss3Alt,
  faHtml5,
  faJs,
  faSass,
} from "@fortawesome/fontawesome-free-brands";

const Welcome = (props) => {
  return (
    <header id="welcome">
      <Particles
        params={{
          particles: {
            number: {
              value: 10,
            },
            size: {
              value: 3,
            },
            color: {
              value: "#d45079",
            },
          },
        }}
      />
      <div className="box">
        <div className="title">
          <span className="block"></span>
          <h1>
            Cristian Restrepo<span></span>
          </h1>
        </div>
        <div className="role">
          <div className="block"></div>
          <p>Frontend web dev</p>
        </div>
        <div className="icons">
          <FontAwesomeIcon className="icon" icon={faReact} />
          <FontAwesomeIcon className="icon" icon={faJs} />
          <FontAwesomeIcon className="icon" icon={faHtml5} />
          <FontAwesomeIcon className="icon" icon={faSass} />
          <FontAwesomeIcon className="icon" icon={faCss3Alt} />
        </div>
      </div>

      <a className="btn-header hvr-sweep-to-top" href="#aboutMe">
        About Me
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
      </a>
    </header>
  );
};

export default Welcome;
