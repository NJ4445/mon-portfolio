import React, { useState } from 'react'; 
import styles from './Contact.module.css';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour envoyer un email via un service comme EmailJS
    console.log('Form Submitted:', form);

    // Réinitialiser le formulaire
    setForm({
      name: '',
      email: '',
      message: ''
    });

    // Afficher le message de confirmation et démarrer l'animation
    setConfirmationMessage('Votre message a été envoyé avec succès !');
    setShowConfirmationMessage(true);

    // Faire disparaître le message de confirmation après 3 secondes
    setTimeout(() => {
      setShowConfirmationMessage(false);
    }, 3000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message"></label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Me contacter</button>
      </form>
      {confirmationMessage && (
        <div
          className={`${styles.confirmationMessage} ${
            showConfirmationMessage ? styles.show : styles.hide
          }`}
        >
          {confirmationMessage}
        </div>
      )}
    </section>
  );
}

export default Contact;
