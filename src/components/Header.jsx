import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';

const Header = () => {
  //States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //Comportement
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //Render
  return (
    <header className="header">
      <div className="header-content">
        <a className="AdelDev" href="#whoIAmSection">
          <p className="name">Adel Drissi</p>
        </a>
        <div
          className={`anchorLinks ${
            isMenuOpen ? 'anchorLinks--open AppearLink' : ''
          }`}
        >
          <ul className="anchorLinks__list">
            <li onClick={() => setIsMenuOpen(false)}>
              <ScrollLink to="whoIamSection" smooth={true} duration={800}>
                About
              </ScrollLink>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <ScrollLink to="projectSection" smooth={true} duration={800}>
                Projects
              </ScrollLink>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <ScrollLink to="sectionContact" smooth={true} duration={800}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="IconResponsive">
          <FontAwesomeIcon
            icon={faBars}
            className="NavbarIcons"
            onClick={toggleMenu}
            aria-label="menu de navigation"
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
