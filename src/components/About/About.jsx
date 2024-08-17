import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <p>Je suis Joy Ndoumathe, un développeur web passionné...</p>
      <h3>Formation</h3>
      <ul>
        <li>Développement - Intégrateur Web</li>
        <li>Premiers pas sur le langage HTML...</li>
        <li>...</li>
      </ul>
    </section>
  );
}

export default About;
