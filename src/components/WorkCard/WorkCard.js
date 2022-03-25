import React from "react";


const WorkCard = ({ title, pic, alt, description, website, repo }) => {
  return (
    <>
      <br></br>
      <div className="card" key={title}>
        <img
          className="card-img-top"
          src={process.env.PUBLIC_URL + "/images/work/" + pic}
          alt={alt}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-body">
          <a href={website} className="card-link footerA">
            Website link
          </a>
          <br></br>
          <a href={repo} className="card-link footerA">
            Git Repository link
          </a>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
