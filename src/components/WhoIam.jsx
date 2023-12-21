import React from 'react';

const WhoIam = () => {
  //Render//

  return (
    <section className="WhoIam" id="whoIamSection">
      <div className="sectionTitle">
        <h2 className="Name-who">
          HEY, MY NAME IS ADEL <br></br>DRISSI
        </h2>
        <p className="mydescription">
          I am a French web developer, I am currently perfecting my skills in
          web development, particularly <br></br> in programming languages
          ​​such as (Javascript and, php)
          <div className="button-projects">
           <a href="#projectSection" className="btn btn-projects">
            Projects
            </a>
          </div>
        </p>
      </div>
    </section>
  );
};

export default WhoIam;
