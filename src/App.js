import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const navLinks = ["About Me", "Work", "Resume", "Contact"];
  const [currentNavLink, setNavLink] = useState(navLinks[0]);
  const myStyle={
    backgroundImage:`url(${process.env.PUBLIC_URL+ "/images/Amsterdam_at_night.jpg"})`
  };

  function renderContent(navLink) {
 
    switch (navLink) {
      case "About Me":
        return <About />;
      case "Work":
        return <Work />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  }

  return (
    <div style={{myStyle}}>
      <Nav
        navLinks={navLinks}
        currentNavLink={currentNavLink}
        setNavLink={setNavLink}
      />
      <main>{renderContent(currentNavLink)}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
