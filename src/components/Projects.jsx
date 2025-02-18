import React, { useEffect } from 'react';
import { listProjects } from '../datas/listProjects';
import ScrollReveal from 'scrollreveal';

const Projects = () => {
  useEffect(() => {
    ScrollReveal().reveal('.project', {
      delay: 200,
      duration: 1000,
      opacity: 0,
      scale: 1.5,
      distance: '30px',
      easing: 'cubic-bezier(0.5, 0, 0, 1)', // Easing personnalisé pour une transition douce
      reset: true, // Réinitialise l'élément après la révélation pour pouvoir le révéler à nouveau
    });
  }, []);

  // Render
  return (
    <section className="projectSection" id="projectSection">
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
