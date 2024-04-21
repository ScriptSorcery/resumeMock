import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Process from './pages/Process/Process';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
