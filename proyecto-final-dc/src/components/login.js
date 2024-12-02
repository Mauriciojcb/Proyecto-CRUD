import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin') {
      onLogin();
      navigate('/'); // Redirige a la vista de bienvenida después del login
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
};

export default Login;
