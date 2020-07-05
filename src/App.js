import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import Home from './content/Home';


function App() {
  return (
    <div>
      <Router>
        <div className='App'>
          <NavBar />
          <Route exact path='/'> <Home /></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
