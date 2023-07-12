import React from 'react';
// import getStartedComponent from './components/getStartedComponent';
import Loginpage from './component/Loginpage';
import signup from './component/signup';
// import navbar from './components/navbar';

import Navbar from './pages/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from './pages/Homepage'; 
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      
      </Router>
    </div>
  );
}

export default App;