import React from 'react';
import Login from './Authentication/Auth.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './NavBar/Navbar.jsx';
import MainCard from './components/MainCard.jsx';
import FlipCard from './components/FlipCard.jsx';
import CardHeader from './components/CardHeader.jsx';
import { Box, Container } from '@mui/material';
import Hero from './Hero.jsx/Hero.jsx';
import AddProduct from './pages/AddProduct/AddProduct.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AddProduct/AllProducts.jsx';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Profile from './pages/Profile.jsx';
import Cart from './pages/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';

function App() {
  return (
    <div className="App">      
     
     <Router>
        <Navbar />

        <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
     </Router>

     {/* Your other components */}
    </div>
  );
}

export default App;
