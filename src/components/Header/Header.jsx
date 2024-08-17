import React, { useState } from 'react';
import styles from './Header.module.css';

function Header() {
  const [activeLink, setActiveLink] = useState('about');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}></div>
      <nav className={styles.nav}>
        <a
          href="#about"
          className={`${styles.navLink} ${activeLink === 'about' ? styles.active : ''}`}
          onClick={() => handleClick('about')}
        >
          About
        </a>
        <a
          href="#projects"
          className={`${styles.navLink} ${activeLink === 'projects' ? styles.active : ''}`}
          onClick={() => handleClick('projects')}
        >
          Projects
        </a>
        <a
          href="#skills"
          className={`${styles.navLink} ${activeLink === 'skills' ? styles.active : ''}`}
          onClick={() => handleClick('skills')}
        >
          Skills
        </a>
        <a
          href="#contact"
          className={`${styles.navLink} ${activeLink === 'contact' ? styles.active : ''}`}
          onClick={() => handleClick('contact')}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
