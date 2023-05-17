import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import React, { useEffect, useState } from 'react';
import WebMenu from './components/WebMenu';
import MobileMenu from './components/MobilMenu';
import Zikirlerim from './components/Zikirlerim';
import Hadisler from './components/Hadisler';
import HadislerJson from './json/HadislerJson';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Esma from './components/Esma';






function App() {
  const [zikirCountDizi,setzikirCountDizi] = useState(JSON.parse(localStorage.getItem('CountDizi'))|| [])  

  
  console.log(zikirCountDizi); // Oluşturulan dizi
  
  useEffect(()=>{
    if (zikirCountDizi.length === 0) {
      setzikirCountDizi(Array(HadislerJson.length).fill(0))
    }
    localStorage.setItem('CountDizi',JSON.stringify(zikirCountDizi))
    
  },[zikirCountDizi])
  return (
    <>
    <div className="App">
      
      <WebMenu/>
      <MobileMenu/>
      <Routes>
          <Route path="/" element={<Home zikirCountDizi={zikirCountDizi} setzikirCountDizi={setzikirCountDizi}/>}/>
          <Route path="/zikirlerim" element={<Zikirlerim zikirCountDizi={zikirCountDizi} setzikirCountDizi={setzikirCountDizi}/>}/>
          <Route path="/hadisler" element={<Hadisler />}/>
          <Route path="/esma-ül-hüsna" element={<Esma />}/>
      </Routes>
    </div>
    <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    style={{fontSize:'18px'}}
    />
    </>
  );
}

export default App;
