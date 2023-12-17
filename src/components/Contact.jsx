// Importer les bibliothèques React et useState
import React, { useState } from 'react';


// Composant du formulaire de contact
const Contact = () => {
  // État initial du formulaire
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phoneNumber: '',
    },
    subject: '',
    message: '',
  });

  // Fonction appelée lorsqu'un champ du formulaire change
  const handleChange = (e, section) => {
    const { name, value } = e.target;
    // Mettre à jour l'état du formulaire avec la nouvelle valeur
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [name]: value,
      },
    }));
  };

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici la logique pour traiter les données du formulaire (par exemple, envoi à un serveur)
    console.log(formData);
    // Réinitialiser le formulaire après soumission si nécessaire
    setFormData({
      personalInfo: {
        name: '',
        email: '',
        phoneNumber: '',
      },
      subject: '',
      message: '',
    });
  };

  // Rendu du formulaire
  return (
    <div className="contact-form-container">
      <div className="sectionTitle">
        <h2> Contactez moi !</h2>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Partie 1 : Informations personnelles */}
        <div className="form-section">
          <label>
            Nom:
            <input
              type="text"
              name="name"
              value={formData.personalInfo.name}
              onChange={(e) => handleChange(e, 'personalInfo')}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.personalInfo.email}
              onChange={(e) => handleChange(e, 'personalInfo')}
              required
            />
          </label>
          <label>
            Téléphone Portable:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.personalInfo.phoneNumber}
              onChange={(e) => handleChange(e, 'personalInfo')}
              required
            />
          </label>
        </div>

        {/* Partie 2 : Sujet du message */}
        <div className="form-section">
          <label>
            Sujet:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={(e) => handleChange(e, 'subject')}
              required
            />
          </label>
        </div>

        {/* Partie 3 : Message */}
        <div className="form-section">
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => handleChange(e, 'message')}
              required
            />
          </label>
        </div>

        {/* Bouton Soumettre */}
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

// Composant principal de l'application
function App() {
  return (
    <div className="App">
      {/* Afficher le formulaire de contact */}
      <Contact />
    </div>
  );
}

// Exporter le composant principal
export default App;
