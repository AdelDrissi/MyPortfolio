import React from 'react';
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

const Contact = () => {
  const refSection = useRef(null);
  useEffect(() => {
    ScrollReveal().reveal(refSection.current, {
      duration: 2000,
      distance: '0px',
      easing: 'ease-in-out',
      interval: 200,
      reset: true,
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
