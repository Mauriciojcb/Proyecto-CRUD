import React, { useState } from "react";
import "./login.css";

const Login = ({ onRegisterRedirect }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
  
    if (email === storedEmail && password === storedPassword) {
      window.location.assign("/menu.js"); 
    } else {
      setError("Credenciales incorrectas. Intenta nuevamente.");
    }
  };
  
  

  return (
    <div className="login-container">
        <img src="i1.png" className="img-logo" alt="Descripción de la imagen" />
        <h1>Control Escolar</h1>
        <br></br>
      <h2>Iniciar Sesión</h2>
      <div className="input-group">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="error-message1">{error}</p>}
      <button onClick={handleLogin}className="login-button">Iniciar Sesión </button>
      <p>
        ¿No tienes cuenta?{" "}
        <span className="register-link" onClick={onRegisterRedirect}>
          Regístrate
        </span>
      </p>
    </div>
  );
};

export default Login;
