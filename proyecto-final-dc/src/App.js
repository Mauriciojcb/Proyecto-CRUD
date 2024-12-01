import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Welcome from './components/Welcome';
import Login from './components/Login';
import StudentsCRUD from './components/StudentsCRUD';
import SubjectsCRUD from './components/SubjectsCRUD';
import Enrollment from './components/Enrollment';
import Grades from './components/Grades';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('splash');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => {
    setCurrentView('welcome'); // Cambia a la pantalla de bienvenida tras un login exitoso
  };

  const handleEnter = () => setCurrentView('menu');

  return (
    <Router>
      <div className="app">
        {currentView === 'splash' && <SplashScreen onFinish={() => setCurrentView('welcome')} />}
        {currentView === 'welcome' && <Welcome onEnter={handleEnter} />}
        {currentView === 'menu' && (
          <>
            <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
              <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
              </button>
              <nav>
                <Link to="/">Login</Link>
                <Link to="/students">Gestionar Alumnos</Link>
                <Link to="/subjects">Gestionar Materias</Link>
                <Link to="/enrollments">Inscripción</Link>
                <Link to="/grades">Captura de Calificaciones</Link>
              </nav>
            </div>
            <main>
              <Routes>
                <Route path="/" element={<Login onLogin={handleLogin} />} />
                <Route path="/students" element={<StudentsCRUD />} />
                <Route path="/subjects" element={<SubjectsCRUD />} />
                <Route path="/enrollments" element={<Enrollment />} />
                <Route path="/grades" element={<Grades />} />
              </Routes>
            </main>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
