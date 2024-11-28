
import './App.css';
import React, { useState } from 'react';
import Login from './components/login';
import Register from './components/register';

function App() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="App">
     

      {/* Sección de Login/Register */}
      <div className="auth-container">
        {showRegister ? (
          <Register onLoginRedirect={() => setShowRegister(false)} />
        ) : (
          <Login onRegisterRedirect={() => setShowRegister(true)} />
        )}
      </div>
    </div>
  );
}

export default App;
