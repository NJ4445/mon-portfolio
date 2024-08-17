import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });  
  };

  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://github.com/yourprofile">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
      </div>
      {showButton && (
        <button onClick={scrollToTop} className={styles.scrollButton}>
          ↑ Back to Top
        </button>
      )}
    </footer>
  );
}

export default Footer; 
