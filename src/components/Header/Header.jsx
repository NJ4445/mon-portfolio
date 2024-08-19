/* Header.jsx */
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

function Header() {
  // État pour suivre le lien actif dans la navigation
  const [activeLink, setActiveLink] = useState('about');

  useEffect(() => {
    const currentHash = window.location.hash.substring(1);
    
    // Vérifie si le hash est présent et différent de 'about'
    if (currentHash && currentHash !== 'about') {
      window.history.replaceState(null, null, '#about');
    }

    // Active 'about' par défaut et faire défiler jusqu'à cet élément
    setActiveLink('about');
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }, []); 

  const handleClick = (link, event) => {
    event.preventDefault(); 
    
    // Met à jour l'état avec le lien cliqué
    setActiveLink(link);
    
    // Ajoute le hash dans l'historique de l'URL
    window.history.pushState(null, null, `#${link}`);
    document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      {/* Overlay pour les effets visuels */}
      <div className={styles.overlay}></div>
      <div className={styles.imageContainer}></div>
      
      {/* Texte superposé sur l'en-tête */}
      <div className={styles.textOverlay}>
        <h1 className={styles.mainTitle}>Bienvenue sur mon Portfolio</h1>
        <p className={styles.mainParagraph}>
          Je suis un développeur passionné avec des compétences variées en développement web et en design.
        </p>
      </div>
      
      {/* Barre de navigation */}
      <nav className={styles.nav}>
        {/* Lien vers la section "À propos" */}
        <a
          href="#about"
          className={`${styles.navLink} ${activeLink === 'about' ? styles.active : ''}`}
          onClick={(event) => handleClick('about', event)}
        >
          À propos
        </a>
        
        {/* Lien vers la section "Projets" */}
        <a
          href="#projects"
          className={`${styles.navLink} ${activeLink === 'projects' ? styles.active : ''}`}
          onClick={(event) => handleClick('projects', event)}
        >
          Projets
        </a>
        
        {/* Lien vers la section "Compétences" */}
        <a
          href="#skills"
          className={`${styles.navLink} ${activeLink === 'skills' ? styles.active : ''}`}
          onClick={(event) => handleClick('skills', event)}
        >
          Compétences
        </a>
        
        {/* Lien vers la section "Contact" */}
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
