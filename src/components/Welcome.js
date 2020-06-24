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
              value: "#32e0c4",
            },
          },
        }}
      />
      <h1 id="title">Hola, soy Cristian</h1>
      <h2 id="subtitle">Desarrollador web front end.</h2>
      <div className="icons">
        <FontAwesomeIcon className="icon" icon={faReact} />
        <FontAwesomeIcon className="icon" icon={faJs} />
        <FontAwesomeIcon className="icon" icon={faHtml5} />
        <FontAwesomeIcon className="icon" icon={faSass} />
        <FontAwesomeIcon className="icon" icon={faCss3Alt} />
      </div>
      <a className="btn-header hvr-sweep-to-top" href="#aboutMe">
        Acerca de mi
        <FontAwesomeIcon icon={faChevronDown} />
      </a>
    </header>
  );
};

export default Welcome;
