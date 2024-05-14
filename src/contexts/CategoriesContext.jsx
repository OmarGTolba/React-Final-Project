import React, { createContext, useState, useEffect } from 'react';

// Define a context
const CategoryContext = createContext();

// Define a provider for the context
export const CategoryProvider = ({ children }) => {
  // State to hold the categories
  const [categories, setCategories] = useState([]);

  // Function to fetch categories from the API
  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/admin/categories');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []); 

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
