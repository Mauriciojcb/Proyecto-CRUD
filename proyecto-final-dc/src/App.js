import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Welcome from './components/Welcome';
import Login from './components/Login';
import StudentsCRUD from './components/StudentsCRUD';
import SubjectsCRUD from './components/SubjectsCRUD';
import Enrollment from './components/Enrollment';
import Grades from './components/Grades';
import './App.css';
import Menu from './components/Menu';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar si el usuario está logueado

  const handleLogin = () => {
    setIsLoggedIn(true);  // Cuando el login es exitoso
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Cuando el usuario cierra sesión
  };

  return (
    <Router>
      <div className="app">
        {isLoggedIn && <Menu onLogout={handleLogout} />} {/* Pasa handleLogout como prop */}
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/welcome" /> : <Navigate to="/login" />} />
          <Route path="/login" element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/welcome" />} />
          <Route path="/welcome" element={isLoggedIn ? <Welcome /> : <Navigate to="/login" />} />
          {isLoggedIn && (
            <>
              <Route path="/students" element={<StudentsCRUD />} />
              <Route path="/subjects" element={<SubjectsCRUD />} />
              <Route path="/enrollments" element={<Enrollment />} />
              <Route path="/grades" element={<Grades />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
