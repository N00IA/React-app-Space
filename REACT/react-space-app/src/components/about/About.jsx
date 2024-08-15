import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>Sobre Mí</h1>
      <img src="./NOIA.jpg" alt="Tu nombre" className="about-photo" />
      <p className="about-name">Nombre: Selene Martinez</p>
      <p className="about-contact">Contacto: cortezsadness@gmail.com</p>
      <p className="about-description">
        Soy una desarrolladora apasionada por la exploración y la tecnología. Me encanta aprender a crear aplicaciones web y explorar nuevas tecnologías.
      </p>
    </div>
  );
}

export default About;
