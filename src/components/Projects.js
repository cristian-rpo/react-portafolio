import React from "react";
import CardProject from "./CardProject";

const Projects = () => {
  const projects = [
    {
      title: "Covid Visualizer",
      url: "https://covid-19-visualizer-v1.netlify.app/",
      urlImg: "covid-visualizer.jpg",
    },
    {
      title: "Product Landing",
      url: "https://cristian-rpo.github.io/Product-Landing-Page/",
      urlImg: "product-landing.jpg",
    },

    {
      title: "Pokemon Finder",
      url: "https://pokemon-api-project.spp1097.now.sh/",
      urlImg: "pokemon-finder.jpg",
    },
    {
      title: "Sass Technical Documentation",
      url: "https://cristian-rpo.github.io/Technical-Documentation-Page/",
      urlImg: "technical-documentation.jpg",
    },
    {
      title: "JavaScript Algorithms",
      url:
        "https://cristian-rpo.github.io/JavaScript-Algorithms-and-Data-Structures/",
      urlImg: "javascript-algorithms.jpg",
    },
  ];
  return (
    <section className="projects" id="projects">
      <h4 className="title">Algunos proyectos en los que he participado :)</h4>
      <div className="projects-container">
        {projects.map((value, index) => {
          return (
            <CardProject
              key={index}
              title={value.title}
              urlImg={value.urlImg}
              url={value.url}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
