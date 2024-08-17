import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

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
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={form.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Send</button>
      </form>
    </section>
  );
}

export default Contact;
