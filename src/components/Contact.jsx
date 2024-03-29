import React from 'react';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Contact = () => {
  useEffect(() => {
    ScrollReveal().reveal('.contact-form', {
      delay: 200,
      duration: 1000,
      opacity: 0,
      scale: 0.85,
      distance: '20px',
      easing: 'cubic-bezier(0.5, 0, 0, 1)', // Easing personnalisé pour une transition douce
      reset: true, // Réinitialise l'élément après la révélation pour pouvoir le révéler à nouveau
    });
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-form">
        <div className="sectionTitle" id="sectionContact">
          <h2> Contact Me</h2>
        </div>
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="text" name="email" id="email" required />
          </label>
          <label>
            Number:
            <input type="tel" name="phone" required />
          </label>
          <label>
            Subject:
            <input type="text" name="subject" required />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              cols="30"
              rows="10"
              id="message"
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
