import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footerContainer">
      <p> © Portfolio produit sans template avec React et SCSS</p>
      <div className="container-contact">
        <a href="https://github.com/AdelDrissi">
          <div className="contactIcons">
            <FontAwesomeIcon
              icon={faGithub}
              className="icons"
              aria-label="lien github"
            />

            <a href="https://www.linkedin.com/in/adel-6822261ba/">
              <div className="contactIcons">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="icons"
                  aria-label="lien linkedin"
                />
              </div>
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
