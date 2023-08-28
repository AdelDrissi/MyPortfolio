import React from 'react';
import { useRef } from 'react';
import { listProjects } from '../datas/listProjects';

const Projects = () => {
  const refSection = useRef(null);

  // Render

  return (
    <section className="projectSection" id="projectSection" ref={refSection}>
      <div className="sectionTitle">
        <h2> Mes Projets</h2>
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
