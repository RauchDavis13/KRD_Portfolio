import React from "react";
import coverImage from "../../assets/Amsterdam_Ken.jpg";
function About() {
  return (
    <section className="my-5">
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />

      <div className="my-2">
        <h1 className="aboutFrame centering rezTitle">My name is Kenneth Rauch Davis</h1>
        <br></br>
        <h3 className="aboutFrame centering">
          Come, lets explore the creative and make something
        </h3>
        <br></br>
        <p className="aboutFrame">
          I have been in the food industry since 1991. I started in the natural
          foods world at a time when natural foods was a very niche segment. I'm
          currently a Trade Marketing and Operations manager for a well known
          olive oil brand, managing a team of 3. In a year, I've restructured
          and greatly improved processes such as forecasting, looking at how
          trade money is spent for promotions, managing various trade budgets
          and providing sales data that now feeds up all the way to the
          corporate division overseas. Along the way, I learned how to build
          PC's and wound up creating new reporting capabilities for any company
          I've worked at.
        </p>
        <p className="aboutFrame">
          I'm a soon to be graduate from the Rutgers Fullstack Develop Computer
          Coding Bootcamp. My goal is to get into another industry, and carry
          over my work experience. All my life I've created and tinkered.
          Painting, writing and performing music, wood crafting, making guitars,
          modifying engines on motorcycles. There is art and love in all of it.
          Now, I can take that desire to get my hands dirty and code. I have so
          much yet to learn, but with sacrifice and discipline, I've been able
          to open a door to a whole new world.
        </p>
        <p></p>
      </div>
    </section>
  );
}

export default About;
