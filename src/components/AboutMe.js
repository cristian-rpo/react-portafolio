import React from "react";

const AboutMe = () => {
  return (
    <section className="aboutme" id="aboutMe">
      <div className="terminal">
        <div className="fakeMenu">
          <div className="fakeButtons fakeClose"></div>
          <div className="fakeButtons fakeMinimize"></div>
          <div className="fakeButtons fakeZoom"></div>
        </div>
        <div className="content">
          <h4>
            > <span className="title">Soy un apasionado por la tecnología</span>
          </h4>
          <p>
            "Me inicié como estudiante de desarrollo de software en el
            Politécnico Jaime Isaza Cadavid en 2018, allí hago uso de JSP,
            Servlets y SQL Oracle Database, aquí tuve la oportunidad de
            apasionarme por el desarrollo de soluciones web, actualmente curso
            un Bootcamp intensivo de desarrollo front-end en Academia Geek
            enfocado en <span className="highlighted">React.js</span>, en donde
            trabajamos en un ambiente colaborativo-virtual, haciendo uso de
            herramientas como Git, GitHub, Trello, Slack, Google Meet y
            Microsoft Teams. Mi deseo es seguir aprendiendo y aplicar mis
            conocimientos en el campo laboral"
            <span className="cursor"> _</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
