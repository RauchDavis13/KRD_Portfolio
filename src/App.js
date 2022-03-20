import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const navLinks = ['About Me', 'Work', 'Resume', 'Contact'];
  const [currentNavLink, setNavLink] = useState(navLinks[0]);

  function renderContent(navLink) {
    switch (navLink) {
      case 'About Me':
        return <About />
      // case 'Work':
      //   return <Work />
      case 'Resume':
        return <Resume />
      case 'Contact':
        return <Contact />
    }
  }

console.log(currentNavLink);

  return (
    <div>
      <Nav
        navLinks={navLinks}
        currentNavLink={currentNavLink}
        setNavLink={setNavLink}
         />
         <main>
           {renderContent(currentNavLink)}
         </main>

    </div>
  );
}

export default App;
