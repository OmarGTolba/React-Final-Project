import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CategoryProvider } from './contexts/CategoriesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CategoryProvider>
  <React.StrictMode>

    <App />
  </React.StrictMode>,
    </CategoryProvider>
)
