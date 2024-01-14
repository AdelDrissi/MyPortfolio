import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  //Render//

  return (
    <section className="WhoIam" id="homeSection">
      <div className="sectionTitle">
        <h2 className="Name-who">
          HEY, MY NAME IS ADEL <br></br>DRISSI
        </h2>
        <p className="mydescription">
          I am a French web developer, I am currently perfecting my skills in
          web development, particularly <br></br> in programming languages
          ​​such as Javascript
          <div className="button-projects">
            <ScrollLink to="projectSection" className='btn btn-projects' smooth={true} duration={700}>
              Projects
            </ScrollLink>
          </div>
        </p>
      </div>
    </section>
  );
};

export default Home;
