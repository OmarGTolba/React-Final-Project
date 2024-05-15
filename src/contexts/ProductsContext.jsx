import React, { createContext, useState, useEffect } from 'react';

// Define a context
const ProductsContext = createContext();

// Define a provider for the context
export const ProductsProvider = ({ children }) => {
  // State to hold the categories
  const [products, setProducts] = useState([]);

  // Function to fetch categories from the API
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/products/get-products');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); 

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
