import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {
  //States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //Comportement
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  //Render
  return (
    <nav className="navbar">
      <a className="AdelDev" href="#whoIAmSection">
        <p className="name">Adel Drissi</p>
        <p className="dev">Développeur web</p>
      </a>
      <div
        className={`anchorLinks ${
          isMenuOpen ? 'appearLink--open AppearLink' : ''
        }`}
      >
        <ul className="anchorLinks__list">
          <li onClick={() => setIsMenuOpen(false)}>
            <a href="#SectionWhoIam" className="LinkNavigation">
              Mon Portrait
            </a>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <a href="#Projects" className="LinkNavigation">
              Projets
            </a>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <a href="#Contact" className="LinkNavigation">
              Contact
            </a>
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
    </nav>
  );
};
export default Navbar;
