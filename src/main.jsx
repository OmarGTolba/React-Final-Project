import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CategoryProvider } from './contexts/CategoriesContext.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import ProductsContext, { ProductsProvider } from './contexts/ProductsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <UserProvider>
 <CategoryProvider>
  <ProductsProvider>

  <React.StrictMode>

    <App />
  </React.StrictMode>,
  </ProductsProvider>
    </CategoryProvider>
    </UserProvider>
)
