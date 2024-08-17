/* Header.jsx */
import React, { useState } from 'react';
import styles from './Header.module.css';

function Header() {
  const [activeLink, setActiveLink] = useState('about');

  const handleClick = (link, event) => {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    setActiveLink(link);

    // Obtient l'élément cible et fait défiler en douceur vers lui
    document.getElementById(link).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      <div className={styles.overlay}></div>
      <div className={styles.imageContainer}></div>
      <div className={styles.textOverlay}>
        <h1 className={styles.mainTitle}>Bienvenue sur mon Portfolio</h1>
        <p className={styles.mainParagraph}>
          Je suis un développeur passionné avec des compétences variées en développement web et en design.
        </p>
      </div>
      <nav className={styles.nav}>
        <a
          href="#about"
          className={`${styles.navLink} ${activeLink === 'about' ? styles.active : ''}`}
          onClick={(event) => handleClick('about', event)}
        >
          À propos
        </a>
        <a
          href="#projects"
          className={`${styles.navLink} ${activeLink === 'projects' ? styles.active : ''}`}
          onClick={(event) => handleClick('projects', event)}
        >
          Projets
        </a>
        <a
          href="#skills"
          className={`${styles.navLink} ${activeLink === 'skills' ? styles.active : ''}`}
          onClick={(event) => handleClick('skills', event)}
        >
          Compétences
        </a>
        <a
          href="#contact"
          className={`${styles.navLink} ${activeLink === 'contact' ? styles.active : ''}`}
          onClick={(event) => handleClick('contact', event)}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
