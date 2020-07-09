import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import Home from './content/Home';
import About from './content/About';
import Education from './content/Education';
import Skills from './content/Skills';
import Projects from './content/Projects';
import Contact from './content/ContactInfo';



function App() {
  return (
    <div>
      <Router>
        <div className='App'>
          <NavBar />
          <Route exact path='/'> <Home /></Route>
          <Route path='/about'><About /></Route>
          <Route path='/education'><Education /></Route>
          <Route path='/skills'><Skills /></Route>
          <Route path='/projects'><Projects /></Route>
          <Route path='/contact'><Contact /></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
