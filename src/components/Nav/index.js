import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { navLinks, currentNavLink, setNavLink } = props;

  return (
    <header className="flex-row px-1">
      <h2>Kenneth Rauch Davis</h2>
      <nav>
        <ul className="flex-row">
          {navLinks.map((navLink) => (
            <li
              className={`mx-1 navList ${
                currentNavLink === navLink && "navActive"
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
