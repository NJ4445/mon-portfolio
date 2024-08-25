/* Skills.jsx */
import React from 'react';
import styles from './Skills.module.css';

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <ul>
        <li className={styles.htmlCss}>HTML & CSS</li>
        <li className={styles.javaScript}>JavaScript</li>
        <li className={styles.react}>React</li>
        <li className={styles.sass}>Sass</li>
        <li className={styles.responsiveDesign}>Responsive Design</li>
      </ul>
    </section>
  );
}

export default Skills;
