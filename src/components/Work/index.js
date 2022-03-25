import React from "react";
import works from "../../data/work.json";
import WorkCard from "../WorkCard/WorkCard";

const Work = () => {
  return (
    <>
      <div >
        <h2 className=" workHeader rezTitle">A collection of my coding work</h2>
      </div>
      <br></br>
      {works.map((work) => {
        return (
          <WorkCard
            key={work.title}
            title={work.title}
            pic={work.pic}
            alt={work.alt}
            description={work.description}
            website={work.website}
            repo={work.repo}
          />
        );
      })}
    </>
  );
};

export default Work;
