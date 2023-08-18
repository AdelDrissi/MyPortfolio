import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section className="sectionContact" id="sectionContact">
      <div className="sectionTitle">
        <h2>Contact</h2>
      </div>
      <div className="container-contact">
        <a href="https://www.linkedin.com/in/adel-6822261ba/">
          <div className="contactIcons">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icons"
              aria-label="lien linkedin"
            />
          </div>
        </a>

        <a href="https://github.com/Adelwa91">
          <div className="contactIcons">
            <FontAwesomeIcon
              icon={faGithub}
              className="icons"
              aria-label="lien github"
            />
          </div>
        </a>

        <a href="mailto: Adeldrissi50@gmail.fr">
          <div className="contactIcons">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="icons"
              aria-label="envoyer un email"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
