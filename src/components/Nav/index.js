import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    // setAboutSelected,
    navLinks,
    currentNavLink,
    setNavLink
  } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(setNavLink.name);
  // }, [setNavLink]);

  console.log(navLinks);
  console.log(currentNavLink);
  return (
    <header className="flex-row px-1">
      <h2>
        Kenneth Rauch Davis      
      </h2>
      <nav>
        <ul className="flex-row">

            {navLinks.map((navLink) => (
            <li
              className={`mx-1 navList ${
                currentNavLink === navLink  && 'navActive'
                }`}
              key={navLink}
            >
              <span
                onClick={() => {
                  setNavLink(navLink);
                }}
              >
                {capitalizeFirstLetter(navLink)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
