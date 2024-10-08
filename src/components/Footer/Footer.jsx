/* Footer.jsx */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour ajuster la visibilité du bouton en fonction du défilement
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fonction pour faire défiler la page jusqu'en haut de manière fluide
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

   // Ajout d'un écouteur d'événements pour le défilement
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a href="mailto:joy.ndoumathe@example.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.linkedin.com/in/joy-ndoumathe/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/NJ4445" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <p>&copy; 2024 Joy Ndoumathe. Tous droits réservés.</p>
      <button
        className={`${styles.scrollToTopBtn} ${isVisible ? styles.visible : ''}`}
        onClick={scrollToTop}
        aria-label="Retour en haut"
      >
        &uarr;
      </button>
    </footer>
  );
}

export default Footer;
