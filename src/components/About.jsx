import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const About = () => {
  //Render//
  return (
    <section className="about" id="aboutSection">
      <div className="main-container">
        <h2 className="aboutDesctiption">
          <span className="title-about">About me</span>
          <p className="text-paragraph">
            My name is Adel Drissi, I am 29 years old and I am passionate about
            programming.
          </p>
        </h2>
        <div className="aboutContent">
          <div className="aboutContent-main">
            <h3 className="aboutContent-title">Get to Know me </h3>
            <div className="aboutContent-details">
              <p className="about-details-paragraphe">
                Hey! It's Getting to know me Hey! This is{' '}
                <strong> Adel Drissi Front-end web developer </strong> located
                in Paris, having completed and validated my training{' '}
                <strong>at Openclassrooms.</strong>
                <br></br> <br></br>being <strong>in professional retraining </strong>,I seized the
                opportunity to move towards the digital world, which has always
                attracted me for a very long time. It is with pleasure that I
                invite you to my portfolio.
              </p>
              <ScrollLink
                to="sectionContact"
                className="btn-about"
                smooth={true}
                duration={700}
              >
                Contact
              </ScrollLink>
            </div>
            <div className="aboutContent-skills"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
