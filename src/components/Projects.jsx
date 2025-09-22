import React, { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projectList = [
    {
      title: "Damsel's Gambit",
      description: 'Anti-dating simulator card game where you try your best to deter a potential royal suitor without bruising his ego.',
      gif: 'public/assets/damsels_gambit.gif',
      link: '#projects',
    },
    {
      title: 'Field Scene',
      description: 'Collection of shaders built upon a DirectX framework to create a cinematic wheat field and abandoned mill scene.',
      gif: 'public/assets/field_scene.gif',
      link: '#projects',
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
        setActiveProject(null);
        }
    };

    if (activeProject) {
        window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div
            className="project-card"
            key={index}
          >
            <img src={project.gif} alt={`${project.title} preview`} className="project-gif" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn" onClick={() => setActiveProject(project)}>View Project</a>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-body">
                <img src={activeProject.gif} alt={`${activeProject.title} full`} className="modal-gif" />
                <div className="modal-details">
                <h3>{activeProject.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, quas qui. Quos perferendis voluptates, illum harum maxime odio reprehenderit impedit similique consectetur tempore, dolorum, dolore ullam eveniet aliquam repudiandae temporibus?</p>
                </div>
            </div>
            <button className="close-btn" onClick={() => setActiveProject(null)}>×</button>
            </div>
        </div>
      )}
    </section>
  );
};

export default Projects;