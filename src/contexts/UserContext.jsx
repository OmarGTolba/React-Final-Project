import React, { createContext, useState, useEffect } from 'react';

// Define a context
const UserContext = createContext();

// Define a provider for the context
export const UserProvider = ({ children }) => {
  // State to hold the categories
  const [token, setToken] = useState([]);

  
  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
