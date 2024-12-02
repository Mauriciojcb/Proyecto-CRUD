import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; // Asegúrate de que la clase CSS esté definida

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-container">
      <button className="menu-icon" onClick={toggleMenu}>
        ☰ {/* Ícono de menú */}
      </button>
      <div className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/students">Gestionar Alumnos</Link>
        <Link to="/subjects">Gestionar Materias</Link>
        <Link to="/enrollments">Inscripción</Link>
        <Link to="/grades">Captura de Calificaciones</Link>
      </div>
    </div>
  );
};

export default Menu;
