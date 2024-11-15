import React, { useState, useEffect } from 'react';
import { technologies } from '../datas/technologies'; // Import des données

const Technologies = () => {
  const [visibleLevels, setVisibleLevels] = useState(
    technologies.map(() => 0) // Initialise toutes les barres à 0%
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleLevels(technologies.map((tech) => tech.level)); // Met à jour avec les vrais niveaux
    }, 500); // Ajoute un délai pour l'animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="technologiesSection">
      <div className="sectionTitle">
        <h2>Technologies maîtrisées</h2>
      </div>
      <div className="technologiesList">
        {technologies.map((tech, index) => (
          <div className="technology" key={index}>
            <div className="techIcon">{tech.icon}</div> {/* Icône colorée */}
            <p>{tech.name}</p>
            <div className="progressBar">
              <div
                className="progressFill"
                style={{ width: `${visibleLevels[index]}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
