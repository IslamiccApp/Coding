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
import Bagis from './components/Bagis';
import ResimDegistir from './components/ResimDegistir';
import MobilResimDegistir from './components/MobilResimDegistir';



function App() {
  const [zikirCountDizi,setzikirCountDizi] = useState(JSON.parse(localStorage.getItem('CountDizi'))|| [])  
  
  useEffect(()=>{
    if(!localStorage.getItem("resim")) // localstorage de resim yoksa bir tane default arkaplan ayarladık
    {
      localStorage.setItem("resim","https://i.imgur.com/DkKcTjw.jpg")
    }
    const abc = localStorage.getItem('resim') // localstoragedeki resim linkini aldık ve arkaplan olarak ayarladık
    document.body.style.backgroundImage = `url(${abc})`; 
  },[])

  useEffect(()=>{
    if (zikirCountDizi.length === 0){ // dizi boş ise içini 0'lar ile doldurduk
      setzikirCountDizi(Array(HadislerJson.length).fill(0))
    }
    localStorage.setItem('CountDizi',JSON.stringify(zikirCountDizi)) // diziyi locale yazdırdık
    
  },[zikirCountDizi])
  return (
    <>
    <div className="App" >
      
      <WebMenu/>
      <MobileMenu/>
      <Routes>
          <Route path="/" element={<Home zikirCountDizi={zikirCountDizi} setzikirCountDizi={setzikirCountDizi}/>}/>
          <Route path="/zikirlerim" element={<Zikirlerim zikirCountDizi={zikirCountDizi} setzikirCountDizi={setzikirCountDizi}/>}/>
          <Route path="/hadisler" element={<Hadisler />}/>
          <Route path="/esma-ül-hüsna" element={<Esma />}/>
          <Route path="/resmidegistir" element={<ResimDegistir />}/>
          <Route path="/mobilmenudegistir" element={<MobilResimDegistir />}/>
          <Route path="/bagis" element={<Bagis/>}/>
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
