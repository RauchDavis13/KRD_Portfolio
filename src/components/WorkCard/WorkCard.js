import React from "react";

const WorkCard = ({ title, pic, alt, description, website, repo }) => {
  return (
    <>
      <div className="card" key={title}>
        <img
          className="card-img-top"
          src={process.env.PUBLIC_URL + "/images/" + pic}
          alt={alt}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-body">
          <a href={website} className="card-link">
            Website link
          </a>
          <br></br>
          <a href={repo} className="card-link">
            Git Repository link
          </a>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
