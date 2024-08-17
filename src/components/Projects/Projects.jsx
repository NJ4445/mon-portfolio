import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  const projects = [
    { name: "Nina_Carducci", description: "Description of the project", link: "https://github.com/NJ4445/Nina_Carducci" },
    { name: "Ohmyfood", description: "Description of the project", link: "https://github.com/NJ4445/ohmyfood" },
    // Ajoutez d'autres projets ici...
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
