import React from 'react';
import styles from './Skills.module.css';

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Responsive Design</li>
        {/* Ajoutez d'autres compétences ici... */}
      </ul>
    </section>
  );
}

export default Skills;
