import React, { useState } from "react";
import "./register.css";

const Register = ({ onLoginRedirect }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (!email || !password) {
      setError("No puedes dejar campos en blanco.");
      return;
    }
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    onLoginRedirect();
  };

  return (
    <div className="register-container">
         <img src="i1.png" className="img-logo" alt="Descripción de la imagen" />
         <h1>Control Escolar</h1>
         <br></br>
      <h2>Regístrate</h2>
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
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleRegister}>Registrar</button>
      <p>
        ¿Ya tienes cuenta?{" "}
        <span className="login-link" onClick={onLoginRedirect}>
          Inicia sesión
        </span>
      </p>
    </div>
  );
};

export default Register;
