import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <NavBar />
      </Router>

    </div>
  );
}

export default App;
