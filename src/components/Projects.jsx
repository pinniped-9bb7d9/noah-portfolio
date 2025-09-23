import React, { useState, useEffect } from 'react';
import './Projects.css';
import damselsGambitGif from '/assets/damsels_gambit.gif';
import fieldSceneGif from '/assets/field_scene.gif';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projectList = [
    {
      title: "Damsel's Gambit",
      description: 'Anti-dating simulator card game where you try your best to deter a potential royal suitor without bruising his ego.',
      detail: 'As part of a team of eight, we developed this game over the span of a semester using Godot, C# and an experimental integration of Yarnspinner. My main responsibility lied in the planing (Notion), implementation (Yarnspinner) and bug fixing of dialogue (Godot + C#).',
      gif: damselsGambitGif,
      link: 'https://roxo-hyrax.itch.io/damsels-gambit',
    },
    {
      title: 'Field Scene',
      description: 'Collection of shaders built upon a DirectX framework to create a cinematic wheat field and abandoned mill scene.',
      detail: 'Programmed in C++ and HLSL, I designed and implemented various shaders across the whole graphic pipeline including vertex, pixel, geometry, hull, and domain shaders to achieve effective lighting and atmospheric effects.',
      gif: fieldSceneGif,
      link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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
            <a className="btn" onClick={() => setActiveProject(project)}>View Project</a>
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
                <a href={activeProject.link} target="_blank" rel="noopener noreferrer">link</a>
                <p>{activeProject.detail}</p>
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