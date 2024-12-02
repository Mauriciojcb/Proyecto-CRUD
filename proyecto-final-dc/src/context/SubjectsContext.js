import React, { createContext, useContext, useState } from 'react';

const SubjectsContext = createContext();

export const SubjectsProvider = ({ children }) => {
  const [subjects, setSubjects] = useState([]);

  return (
    <SubjectsContext.Provider value={{ subjects, setSubjects }}>
      {children}
    </SubjectsContext.Provider>
  );
};

export const useSubjects = () => useContext(SubjectsContext);
