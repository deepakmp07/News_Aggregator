import React from 'react';
// import getStartedComponent from './components/getStartedComponent';
import Loginpage from './component/Loginpage';
import signup from './component/signup';
// import navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        {/* <Route path = "/" Component={getStartedComponent} /> */}
        {/* <Route path = "/logo" Component={Logo} /> */}

        <Route path = "/" Component={Loginpage} />
        <Route path='/signup' Component={signup} />
        {/* <Route path = '/navbar' Component={navbar} /> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;