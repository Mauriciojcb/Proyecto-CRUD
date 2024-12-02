import React, { createContext, useState, useContext } from 'react';

const EnrollmentsContext = createContext();

export const EnrollmentsProvider = ({ children }) => {
  const [enrollments, setEnrollments] = useState([]);

  return (
    <EnrollmentsContext.Provider value={{ enrollments, setEnrollments }}>
      {children}
    </EnrollmentsContext.Provider>
  );
};

export const useEnrollments = () => useContext(EnrollmentsContext);
