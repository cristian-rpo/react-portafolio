import React from "react";

const CardProject = ({ title, url, urlImg }) => {
  return (
    <div className="card hvr-bob">
      <div className="card-main">
        <img
          className="card-img"
          src={require(`../img/projects/${urlImg}`)}
          alt="..."
        />
      </div>
      <a
        className="card-header hvr-sweep-to-right"
        href={url}
        alt="..."
        target="_blank"
      >
        {title}
      </a>
    </div>
  );
};

export default CardProject;
