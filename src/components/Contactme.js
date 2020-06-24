import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/fontawesome-free-brands";
const ContactMe = () => {
  return (
    <section className="contact-me" id="contact">
      <div className="banner">
        <h4>Contáctame!</h4>
        <p>
          "La tecnología hizo posible las grandes poblaciones; ahora las grandes
          poblaciones hacen que la tecnología sea indispensable. (José Krutch)"
        </p>
        <div className="contact-icons">
          <a
            href="https://github.com/cristian-rpo"
            alt="..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="contact-icon hvr-bob" icon={faGithub} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=573122062130&text=Hola,%20acabo%20de%20ver%20tu%20portafolio%20y%20quisiera%20saber%20mas%20sobre%20tu%20trabajo%20como%20desarrollador%20front%20end"
            alt="..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="contact-icon hvr-bob"
              icon={faWhatsapp}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/cristian-rpo"
            alt="..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="contact-icon hvr-bob"
              icon={faLinkedin}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
