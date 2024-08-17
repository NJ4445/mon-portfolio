import React from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import styles from './Main.module.css';

function Main() {
  return (
    <main className={styles.main}>
      <section id="about" className={styles.aboutSection}>
        <About />
      </section>
      <section id="projects" className={styles.projectsSection}>
        <Projects />
      </section>
      <section id="skills" className={styles.skillsSection}>
        <Skills />
      </section>
      <section id="contact" className={styles.contactSection}>
        <Contact />
      </section>
    </main>
  );
}

export default Main;
