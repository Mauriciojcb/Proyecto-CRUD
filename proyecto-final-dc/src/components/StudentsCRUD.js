import React, { useState } from 'react';
import Menu from './Menu'; // Asegúrate de importar el componente del menú
import './StudentsCRUD.css';

const StudentsCRUD = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', lastName: '', career: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState('');

  const handleAddStudent = () => {
    if (newStudent.name.trim() === '' || newStudent.lastName.trim() === '' || newStudent.career.trim() === '') {
      setError('Todos los campos son requeridos.');
      return;
    }
    setStudents([...students, newStudent]);
    setNewStudent({ name: '', lastName: '', career: '' });
    setError('');
  };

  const handleEditStudent = (index) => {
    setNewStudent(students[index]);
    setEditIndex(index);
  };

  const handleSaveEdit = () => {
    if (newStudent.name.trim() === '' || newStudent.lastName.trim() === '' || newStudent.career.trim() === '') {
      setError('Todos los campos son requeridos.');
      return;
    }
    const updatedStudents = [...students];
    updatedStudents[editIndex] = newStudent;
    setStudents(updatedStudents);
    setNewStudent({ name: '', lastName: '', career: '' });
    setEditIndex(null);
    setError('');
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div className="students-crud-container">
      <Menu /> {/* Agrega el menú aquí */}
      <img src="/i1.png" alt="EduManage Logo" className="login-logo" />
      <h1>Gestión de Alumnos</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Nombre del Alumno"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Apellido del Alumno"
          value={newStudent.lastName}
          onChange={(e) => setNewStudent({ ...newStudent, lastName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Carrera del Alumno"
          value={newStudent.career}
          onChange={(e) => setNewStudent({ ...newStudent, career: e.target.value })}
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
            <span>Nombre: {student.name}</span>
            <span>Apellido: {student.lastName}</span>
            <span>Carrera: {student.career}</span>
            <div className="actions">
              <button onClick={() => handleEditStudent(index)} className="edit">Editar</button>
              <button onClick={() => handleDeleteStudent(index)} className="delete">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsCRUD;
