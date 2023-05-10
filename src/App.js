import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import React from 'react';
import WebMenu from './components/WebMenu';
import MobileMenu from './components/MobilMenu';


function App() {
  return (
    <div className="App">,
      
      <WebMenu/>
      <MobileMenu/>

      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
