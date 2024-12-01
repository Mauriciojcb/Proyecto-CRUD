import React, { useState } from 'react';
import './StudentsCRUD.css';

const StudentsCRUD = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState('');

  const handleAddStudent = () => {
    if (newStudent.trim() === '') {
      setError('El nombre del alumno no puede estar vacío.');
      return;
    }
    setStudents([...students, newStudent]);
    setNewStudent('');
    setError('');
  };

  const handleEditStudent = (index) => {
    setNewStudent(students[index]);
    setEditIndex(index);
  };

  const handleSaveEdit = () => {
    if (newStudent.trim() === '') {
      setError('El nombre del alumno no puede estar vacío.');
      return;
    }
    const updatedStudents = [...students];
    updatedStudents[editIndex] = newStudent;
    setStudents(updatedStudents);
    setNewStudent('');
    setEditIndex(null);
    setError('');
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div className="students-crud-container">
      <h1>Gestión de Alumnos</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Nombre del Alumno"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
        />
        {editIndex !== null ? (
          <button onClick={handleSaveEdit}>Guardar</button>
        ) : (
          <button onClick={handleAddStudent}>Agregar</button>
        )}
        {error && <p className="error">{error}</p>}
      </div>
      <ul className="students-list">
        {students.map((student, index) => (
          <li key={index}>
            {student}
            <div className="actions">
              <button onClick={() => handleEditStudent(index)}>Editar</button>
              <button onClick={() => handleDeleteStudent(index)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsCRUD;
