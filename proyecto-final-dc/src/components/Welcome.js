import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate(); // Hook para la navegación

  const handleNavigation = (route) => {
    navigate(`/${route.toLowerCase()}`); // Navegar a la ruta correspondiente
  };

  return (
    <div className="welcome-container">
      <h1>Bienvenido a la Gestión Escolar</h1>
      <button onClick={() => handleNavigation('Students')}>Gestionar Alumnos</button>
      <button onClick={() => handleNavigation('Subjects')}>Gestionar Materias</button>
      <button onClick={() => handleNavigation('Enrollments')}>Inscripción</button>
      <button onClick={() => handleNavigation('Grades')}>Captura de Calificaciones</button>
    </div>
  );
};

export default Welcome;
