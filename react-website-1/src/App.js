import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Mission from './components/pages/Mission';
import Diagnose from './components/pages/Diagnose';
import RelevantWork from './components/pages/RelevantWork';
import Team from './components/pages/Team';
import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  /*Creates a React application utilizing react-router-dom library for handling navigation, rendering different components (such as Home, Mission) based on specified paths and includes Navbar+Footer*/
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ <Home />}></Route>
          <Route path='/mission' element={ <Mission />}></Route>
          <Route path='/diagnose' element={ <Diagnose />}></Route> 
          <Route path='/team' element={ <Team />}></Route> 
          <Route path='/relevantwork' element={ <RelevantWork />}></Route>
          <Route path='/contact' element={ <Contact />}></Route> 
          <Route path='/sign-up' element={ <SignUp />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
