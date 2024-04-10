import React, { useState } from 'react';
import projectsData from '../data/dataProjets';
import { Link } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, faGithub)

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projets">
      <h1>Mes réalisations</h1>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card" onClick={() => openModal(project)}>
            <img src={project.image} alt={project.alt} />
            <h2>{project.title} </h2>
          </div>
          
        ))}
      </div>
      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <img className='img-modal' src={selectedProject.image} alt={selectedProject.alt} />
            <p>{selectedProject.description}</p>
            <p>{selectedProject.competences}</p>
            <a href={selectedProject.github}><FontAwesomeIcon icon={faGithub}/></a>
            <a href={selectedProject.site}><FontAwesomeIcon icon={faGlobe} /></a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;

