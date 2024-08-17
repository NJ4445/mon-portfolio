/* About.jsx */
import React from 'react';
import styles from './About.module.css';
import aboutImage from '../../assets/img/about.jpg'; 

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>À propos de moi</h2>
      <p>
        Je suis <strong>Joy Ndoumathe</strong>, un <strong>développeur web</strong> passionné par la création
        d’expériences web captivantes et interactives. Diplômée d'<strong>OpenClassrooms</strong> en 2024,
        j'ai acquis des <strong>compétences solides</strong> pour offrir des <strong>solutions web innovantes</strong>
        et optimisées. Mon parcours inclut une <strong>formation approfondie en développement web</strong>, axée sur
        l'<strong>intégration web</strong> et le <strong>développement front-end</strong>.
      </p>
      <img src={aboutImage} alt="Description de l'image" className={styles.aboutImage} />
    </section>
  );
}

export default About;
