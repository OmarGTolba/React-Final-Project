// App.jsx
import React from 'react';
import Login from './Authentication/Auth.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './NavBar/Navbar.jsx';
function App() {
  return (
    <div className="App">
      
      <Login /> 
      {/* <Navbar></Navbar> */}
    </div>
  );
}

export default App;
