import React from "react";
import "./menu.css"; // Archivo CSS para estilos

function Menu() {
  return (
    <div className="menu-container">
      <div className="logo-container">
        <img src="/i1.png" alt="EduManage Logo" className="logo" />
      </div>
      <div className="menu-box">
        <h1 className="menu-title">MENU</h1>
        <button className="menu-button">REGISTRAR ALUMNO</button>
        <button className="menu-button">VER ALUMNOS</button>
        <button className="menu-button">REGISTRAR MATERIAS</button>
        <button className="menu-button">VER MATERIAS</button>
        <button className="menu-button">CAPTURAR CALIFICACIONES</button>
      </div>
      <div className="exit-container">
        <button className="exit-button">
          <span className="exit-icon">➔</span>
          SALIR
        </button>
      </div>
    </div>
  );
}

export default Menu;
