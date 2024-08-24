/* Projects.jsx */
import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  const projects = [
    { 
      name: "Kasa", 
      description: "Application front-end pour annonces immobilières, utilisant React, React Router, Sass, et animations CSS.", 
      link: "https://brilliant-twilight-bbcb7c.netlify.app",
      skills: ["React", "React Router", "CSS Modules", "Sass", "Animations CSS", "Responsive Design"]
    },
    { 
      name: "Nina_Carducci", 
      description: "Projet axé sur l'optimisation des performances et de l'accessibilité, avec des outils comme Lighthouse et Wave.", 
      link: "https://nj4445.github.io/Nina_Carducci/",
      skills: ["React", "JavaScript", "HTML", "CSS", "Lighthouse", "Wave"]
    },
    { 
      name: "Ohmyfood", 
      description: "Intégration mobile-first avec animations CSS et gestion des versions via Git et GitHub.", 
      link: "https://nj4445.github.io/ohmyfood/",
      skills: ["React", "Sass", "API Integration", "Animations CSS", "Git", "GitHub"]
    },
  ];
  

  return (
    <section id="projects" className={styles.projects}>
    <h2>Projects</h2>
    <div className={styles.projectList}>
      {projects.map((project, index) => (
        <div key={index} className={styles.projectItem}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <ul className={styles.skillsList}>
            {project.skills.map((skill, skillIndex) => (
              <li key={skillIndex} className={styles.skillItem}>{skill}</li>
            ))}
          </ul>
          <a href={project.link} target="_blank" rel="noopener noreferrer">Visitez le site</a>
        </div>
      ))}
    </div>
  </section>
  );
}

export default Projects; 
