import React from 'react';
import './Welcome.css';

const Welcome = ({ onEnter }) => {
  return (
    <div className="welcome-container">
      <h1>Bienvenido al Sistema Escolar</h1>
      <p>Por favor, selecciona una opción en el menú para comenzar.</p>
      <button onClick={onEnter}>Entrar al Menú</button>
    </div>
  );
};

export default Welcome;
