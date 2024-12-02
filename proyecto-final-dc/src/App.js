import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Welcome from './components/Welcome';
import Login from './components/Login';
import StudentsCRUD from './components/StudentsCRUD';
import SubjectsCRUD from './components/SubjectsCRUD';
import Enrollment from './components/Enrollment';
import Grades from './components/Grades';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Controla si el usuario está logueado

  const handleLogin = () => {
    setIsLoggedIn(true); // Cuando el login es exitoso
  };

  return (
    <Router>
      <div className="app">
        {/* Ruta para la pantalla de login */}
        {!isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          </Routes>
        ) : (
          <>
            {/* Ruta para la pantalla de bienvenida después del login */}
            <Routes>
              <Route path="/" element={<Welcome />} />
            </Routes>

            {/* Rutas para las demás interfaces */}
            <Routes>
              <Route path="/students" element={<StudentsCRUD />} />
              <Route path="/subjects" element={<SubjectsCRUD />} />
              <Route path="/enrollments" element={<Enrollment />} />
              <Route path="/grades" element={<Grades />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
