import React from 'react';
import Notification from './component/Notification';
// import getStartedComponent from './components/getStartedComponent';
import { useLocation } from "react-router-dom";
import Loginpage from './component/Loginpage';
import signup from './component/signup';
import NewsDemo from './pages/NewsDemo';
import Navbar from './pages/Navbar';
import About from './pages/navbar/About';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SignupPage from './component/signup';
import Feedback from './pages/Feedback';
import Header from './pages/header';
import Footer from './pages/footer';
import World from './pages/navbar/World';
import FeedbackForm from './pages/Feedback';
import India from './pages/navbar/India';
import Buisness from './pages/navbar/Buisness';
import Sports from './pages/navbar/Sports';
import Local from './pages/navbar/Local';
import Entertainment from './pages/navbar/Entertainment';
const Navi=()=>{
  const loc = useLocation();
  if(!(loc.pathname==='/' || loc.pathname==='/signup')){
    return(
      <>
      <Header></Header>
      <Navbar></Navbar>
      </>
    )
}
}
const Foot=()=>{
  const loc = useLocation();
  if(!(loc.pathname==='/' || loc.pathname==='/signup')){
    return(
      <>
      <Footer/>
      </>
    )
}
}

function App() {
    return (
    <div className="App">
      <Router>
         <Navi/>
        <Routes>
          <Route path='/' Component={Loginpage} />
          <Route path ='/noti' Component={Notification}/>
          <Route path = '/signup' Component={SignupPage} />
          <Route path = '/business' Component={Buisness} />
          <Route path = '/india' Component={India} />
          <Route path = '/world' Component={World} />
          <Route path = '/signup' Component={SignupPage} />
          <Route path = '/sports' Component={Sports} />
          <Route path = '/local' Component={Local} />
          <Route PATH='/feedback' Component={FeedbackForm}/>
          <Route path = '/signup' Component={SignupPage} />
          <Route path = '/entertainment' Component={Entertainment} />
          <Route path = '/demo' Component={NewsDemo} />
          <Route path = '/about' Component={About} />
          <Route path = '/feedback' Component = {Feedback}/>
        </Routes>
        <Foot></Foot>
      </Router>
    </div>
  );
}

export default App;