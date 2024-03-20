import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import ScrollReveal from 'scrollreveal';

const Home = () => {
  useEffect(() => {
    ScrollReveal().reveal('.WhoIam', {
      duration: 1000,
      opacity: 0,
      scale: 0.85,
      distance: '20px',
      easing: 'cubic-bezier(0.5, 0, 0, 1)', // Easing personnalisé pour une transition douce
      reset: true, // Réinitialise l'élément après la révélation pour pouvoir le révéler à nouveau
    });
  }, []);

  //Render//
  return (
    <section className="WhoIam" id="homeSection">
      <div className="sectionTitle">
        <h1 className="Name-who">
          HEY, MY NAME IS ADEL <br></br>DRISSI
        </h1>
        <p className="mydescription">
          I am a French web developer, I am currently perfecting my skills in
          web development, particularly <br></br> in programming languages
          ​​such as Javascript
          <div className="button-projects">
            <ScrollLink
              to="projectSection"
              className="btn btn-projects"
              smooth={true}
              duration={800}
            >
              Projects
            </ScrollLink>
          </div>
        </p>
      </div>
    </section>
  );
};

export default Home;
