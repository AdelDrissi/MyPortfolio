import React from 'react';
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
        <ul className="anchorLinks__list"></ul>
      </div>
    </nav>
  );
};
export default Navbar;
