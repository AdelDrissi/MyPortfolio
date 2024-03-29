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
    <div className="contact">
      <form
        name="contact"
        method="post"
        className="contact__form"
        data-netlify="true"
        onSubmit="onSubmit"
      >
        <div className="sectionTitle" id="sectionContact">
          <h2> Contact Me</h2>
        </div>

        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" />

        <label htmlFor="name">Email : </label>
        <input type="email" name="email" />

        <label htmlFor="name">Message : </label>
        <textarea name="message"></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default Contact;
