import React, { useState } from 'react';
import './Enrollment.css';

const Enrollment = () => {
  const [students, setStudents] = useState(['Juan Pérez', 'María López']); // Datos simulados
  const [subjects, setSubjects] = useState(['Matemáticas', 'Historia']); // Datos simulados
  const [enrollments, setEnrollments] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [error, setError] = useState('');

  const handleEnroll = () => {
    if (!selectedStudent || !selectedSubject) {
      setError('Por favor selecciona un alumno y una materia.');
      return;
    }
    const enrollmentExists = enrollments.find(
      (e) => e.student === selectedStudent && e.subject === selectedSubject
    );
    if (enrollmentExists) {
      setError('Este alumno ya está inscrito en esta materia.');
      return;
    }
    setEnrollments([...enrollments, { student: selectedStudent, subject: selectedSubject }]);
    setSelectedStudent('');
    setSelectedSubject('');
    setError('');
  };

  const handleDeleteEnrollment = (index) => {
    const updatedEnrollments = enrollments.filter((_, i) => i !== index);
    setEnrollments(updatedEnrollments);
  };

  return (
    <div className="enrollment-container">
      <h1>Inscripción de Alumnos a Materias</h1>
      <div className="form">
        <select
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
        >
          <option value="">Selecciona un Alumno</option>
          {students.map((student, index) => (
            <option key={index} value={student}>
              {student}
            </option>
          ))}
        </select>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="">Selecciona una Materia</option>
          {subjects.map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        <button onClick={handleEnroll}>Inscribir</button>
        {error && <p className="error">{error}</p>}
      </div>
      <ul className="enrollment-list">
        {enrollments.map((enrollment, index) => (
          <li key={index}>
            {enrollment.student} → {enrollment.subject}
            <button onClick={() => handleDeleteEnrollment(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Enrollment;
