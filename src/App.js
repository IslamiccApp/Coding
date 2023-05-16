import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import React from 'react';
import WebMenu from './components/WebMenu';
import MobileMenu from './components/MobilMenu';
import Zikirlerim from './components/Zikirlerim';
import Hadisler from './components/Hadisler';






function App() {
  return (
    <div className="App">
      
      <WebMenu/>
      <MobileMenu/>

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/zikirlerim" element={<Zikirlerim/>}/>
          <Route path="/hadisler" element={<Hadisler/>}/>
      </Routes>
    </div>
  );
}

export default App;
