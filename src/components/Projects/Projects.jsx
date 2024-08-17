/* Projects.jsx */
import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  const projects = [
    { 
      name: "Kasa", 
      description: "Application de gestion immobilière avec une interface utilisateur interactive.", 
      link: "https://brilliant-twilight-bbcb7c.netlify.app",
      skills: ["React", "CSS Modules", "Responsive Design"]
    },
    { 
      name: "Nina_Carducci", 
      description: "Un projet personnel mettant en avant le travail de Nina Carducci, avec une interface interactive et un design moderne.", 
      link: "https://nj4445.github.io/Nina_Carducci/",
      skills: ["React", "JavaScript", "HTML", "CSS"]
    },
    { 
      name: "Ohmyfood", 
      description: "Une application web pour découvrir et commander des plats, mettant en œuvre des technologies modernes pour une expérience utilisateur fluide.", 
      link: "https://nj4445.github.io/ohmyfood/",
      skills: ["React", "Sass", "API Integration"]
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
