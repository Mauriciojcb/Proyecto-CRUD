import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish();
    }, 3000); // Duración del splash screen
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <h1>Sistema Escolar</h1>
      <p>Cargando...</p>
    </div>
  );
};

export default SplashScreen;
