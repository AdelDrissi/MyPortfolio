import React from 'react';
import { useRef, useEffect } from 'react';
import { listProjects } from '../datas/listProjects';
import ScrollReveal from 'scrollreveal';

const Projects = () => {
  const refSection = useRef(null);
  useEffect(() => {
    ScrollReveal().reveal(refSection.current, {
      duration: 1400, 
      distance: '0px', 
      easing: 'ease-in-out', 
      interval: 200, 
      reset: true,
    });
  }, []);

  // Render

  return (
    <section className="projectSection" id="projectSection" ref={refSection}>
      <div className="sectionTitle">
        <h2> Projects</h2>
      </div>
      <div className="listProjects">
        {listProjects.map((proj) => (
          <a href={proj.link} className="myprojectList" key={proj.id}>
            <div className="project">
              <div className="projectInfo">
                <h2 className="projectTitle">{proj.name}</h2>
                <img className="projectImage" src={proj.cover} alt=""></img>
                <p className="projetDescription">{proj.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
