import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForms from './components/textForms'; // Ensure proper capitalization
import React from "react";
import About from './components/About'; // Import the About component

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Navbar title="Kaushik" mode={mode} toggleMode={toggleMode} />
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForms mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
