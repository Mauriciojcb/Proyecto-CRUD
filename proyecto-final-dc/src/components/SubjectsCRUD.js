import React, { useState } from 'react';
import Menu from './Menu'; // Asegúrate de importar el componente del menú
import './SubjectsCRUD.css';

const SubjectsCRUD = () => {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState('');

  const handleAddSubject = () => {
    if (newSubject.trim() === '') {
      setError('El nombre de la materia no puede estar vacío.');
      return;
    }
    setSubjects([...subjects, newSubject]);
    setNewSubject('');
    setError('');
  };

  const handleEditSubject = (index) => {
    setNewSubject(subjects[index]);
    setEditIndex(index);
  };

  const handleSaveEdit = () => {
    if (newSubject.trim() === '') {
      setError('El nombre de la materia no puede estar vacío.');
      return;
    }
    const updatedSubjects = [...subjects];
    updatedSubjects[editIndex] = newSubject;
    setSubjects(updatedSubjects);
    setNewSubject('');
    setEditIndex(null);
    setError('');
  };

  const handleDeleteSubject = (index) => {
    const updatedSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(updatedSubjects);
  };

  return (
    <div className="subjects-crud-container">
      <Menu /> {/* Agrega el menú aquí */}
      <h1>Gestión de Materias</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Nombre de la Materia"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
        />
        {editIndex !== null ? (
          <button onClick={handleSaveEdit}>Guardar</button>
        ) : (
          <button onClick={handleAddSubject}>Agregar</button>
        )}
        {error && <p className="error">{error}</p>}
      </div>
      <ul className="subjects-list">
        {subjects.map((subject, index) => (
          <li key={index}>
            {subject}
            <div className="actions">
              <button onClick={() => handleEditSubject(index)}>Editar</button>
              <button onClick={() => handleDeleteSubject(index)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectsCRUD;
