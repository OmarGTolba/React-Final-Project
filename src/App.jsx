// App.jsx
import React from 'react';
import Login from './Authentication/Auth.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './NavBar/Navbar.jsx';
import MainCard from './components/MainCard.jsx';
import FlipCard from './components/FlipCard.jsx';
import CardHeader from './components/CardHeader.jsx';
import { Box, Container } from '@mui/material';
import Hero from './Hero.jsx/Hero.jsx';
function App() {
  return (
    <div className="App">      
      {/* <Login />  */}
      <Navbar></Navbar>
      <Hero></Hero>
      <Container>
      <CardHeader>Home</CardHeader>
      <Box display={'flex'} justifyContent={'space-between'} sx={{width:'100%'}}>
        
      <MainCard style={{ flex: '1 0 25%' }}></MainCard>
      <MainCard style={{ flex: '1 0 25%' }}></MainCard>
      <MainCard style={{ flex: '1 0 25%' }}></MainCard>
      <MainCard style={{ flex: '1 0 25%' }}></MainCard>
      
      </Box>
      </Container>
      <Container>
      <CardHeader>Home</CardHeader>
      <Box display={'flex'} justifyContent={'space-between'} sx={{width:'100%'}}>
        
      <MainCard style={{ flex: '1 0 25%' }}></MainCard>
      <MainCard style={{ flex: '1 0 25%' }}></MainCard>
      <MainCard style={{ flex: '1 0 25%' }}></MainCard>
      <MainCard style={{ flex: '1 0 25%' }}></MainCard>
      
      </Box>
      </Container>
      <Container>
      <CardHeader>Home</CardHeader>
      <Box display={'flex'} justifyContent={'space-between'} sx={{width:'100%'}}>
        
      <MainCard style={{ flex: '1 0 25%' }}></MainCard>
      <MainCard style={{ flex: '1 0 25%' }}></MainCard>
      <MainCard style={{ flex: '1 0 25%' }}></MainCard>
      <MainCard style={{ flex: '1 0 25%' }}></MainCard>
      
      </Box>
      </Container>
    </div>
  );
}

export default App;
