import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateMessage = (message) => {
    return message.trim().length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    let formErrors = { name: '', email: '', message: '' };

    // Validation des champs
    if (!name) formErrors.name = 'Name is required.';
    if (!email) formErrors.email = 'Email is required.';
    if (!validateEmail(email))
      formErrors.email = 'Please enter a valid email address.';
    if (!message) formErrors.message = 'Message is required.';
    if (!validateMessage(message))
      formErrors.message = 'Please enter a message.';

    // Si des erreurs sont présentes, on les met à jour
    if (formErrors.name || formErrors.email || formErrors.message) {
      setErrors(formErrors);
      return;
    }

    // Si toutes les validations passent
    setErrors({ name: '', email: '', message: '' }); // Réinitialiser les erreurs

    // Créer le lien mailto
    const mailtoLink = `mailto:tonemail@gmail.com?subject=Message from ${name}&body=Email: ${email}%0A%0AMessage:%0A${message}`;

    // Rediriger l'utilisateur vers son client de messagerie 
    window.location.href = mailtoLink; // Cela ouvrira l'interface de composition du mail
  };

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
        className="contact__form contact-form"
        onSubmit={handleSubmit}
      >
        <div className="sectionTitle" id="sectionContact">
          <h2>Contact Me</h2>
        </div>
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          id="name"
        />
        {errors.name && <p className="error-message">{errors.name}</p>}{' '}
        {/* Message d'erreur pour le nom */}
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="email"
        />
        {errors.email && <p className="error-message">{errors.email}</p>}{' '}
        {/* Message d'erreur pour l'email */}
        <label htmlFor="message">Message: </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          id="message"
        ></textarea>
        {errors.message && <p className="error-message">{errors.message}</p>}{' '}
        {/* Message d'erreur pour le message */}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
