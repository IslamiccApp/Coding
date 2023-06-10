import React,{useEffect, useState} from 'react'
import resim from '../img/sayac_cerceve.png'
import cerceve from '../img/abcd.png'
import el from '../img/zikir_el.png'
import { Grid ,Typography,Box} from '@mui/material'
import '../css/Home.css'
import { IoIosRefresh } from "react-icons/io";
import '../css/WebMenu.css'
import { useLocation } from 'react-router'
import GününHadisi from '../json/GününHadisiJson'






function Home({setzikirCountDizi,zikirCountDizi}) {
  
  const location =useLocation().state
  const [count, setCount] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.hadith.gading.dev/books/bukhari?range=100-200");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchData();
  }, []);
  

  useState(()=>{
    if(location)
    {
      setCount(zikirCountDizi[location?.index]) // tıkladığımız zikrin dizideki sırasını alıp içeriğine gittik
    }
    else
    {
      const countDizi = JSON.parse(localStorage.getItem("CountDizi"));
      const value = countDizi && countDizi[0] !== undefined ? countDizi[0] : 0; // daha önceden localstorage de yoksa ve null değer dönüyorsa ekrana 0 yazdık
      setCount(value);
    }
  },[location])

  const ClickButton = () => { // her butona tıklandığı zaman zikircountdizi yi günceller ve localstorage yazılması için gönderir
    if (location) {
      setCount(prevCount => {
        const updatedCount = prevCount + 1;
        setzikirCountDizi([
          ...zikirCountDizi.slice(0, location.index),
          updatedCount,
          ...zikirCountDizi.slice(location.index + 1)
        ]);
        return updatedCount;
      });
    } else {
      setCount(prevCount => {
        const updatedCount = prevCount + 1;
        setzikirCountDizi([
          ...zikirCountDizi.slice(0, 0),
          updatedCount,
          ...zikirCountDizi.slice(0 + 1)
        ]);
        return updatedCount;
      });
    }
  };
  

/*   const saveCount = () => {
    toast.success("Başarıyla kaydedildi")
    if(location)
    {
      setzikirCountDizi([...zikirCountDizi.slice(0, location.index), count, ...zikirCountDizi.slice(location.index + 1)]);

    }
    else
    {
      setzikirCountDizi([...zikirCountDizi.slice(0, 0), count, ...zikirCountDizi.slice(0 + 1)]);
    }

  } */

  const resetCount = () => { // tıkladığımız elemanı localstoragedeki diziden sıfırlar
    setCount(0)
    if(location)
    {
      setzikirCountDizi([...zikirCountDizi.slice(0, location.index), 0, ...zikirCountDizi.slice(location.index + 1)]);
    }
    else
    {
      setzikirCountDizi([...zikirCountDizi.slice(0, 0), 0, ...zikirCountDizi.slice(0 + 1)]);
    }
    }
    var tarih= new Date(); 
    var gun = tarih.getDay(); // var olan günü aldık 0 == pazar ,1 == pazatesi ... 0-6 arasında 
    const [günHadis,setgünHadis]=useState() 
    useEffect(()=>{ 
      setgünHadis(GününHadisi[gun])
    },[gun])
 


 
  return (
    <>
    <div className='backgroun_img'>

      <Grid container row='true' p={1} sx={{display:'flex',justifyContent:'center',marginTop:'2vh'}}>
        <Grid xl={10} sm={11} xs={12} className='gününhadisi_home' item >
        <center><Typography variant='h2'  fontFamily={'kalam'} className='home_type'>{günHadis?.name}</Typography></center>
        <Box>
          <Typography variant='h4' className='gununhadisi_home_yazi'>
          {günHadis?.meal}
          </Typography>
        </Box>
        </Grid>
      </Grid>
    <center>     
      <div className='contain_son_zikir'> 
        <span className='home_son_zikir'>
          {
            location ? // eğer zikirlerim sayfasından tıklayıp geldiyse o değeri göster yoksa default olarak SubhanAllah 
            <>
              <div className='zikir_ismi' >{location?.name}</div>
            </> :
            <>
              <div className='zikir_ismi' >SubhanAllah</div>
            </>
          }
          
        </span>
      </div>
    </center>
      <div className='sayac'>
      <div className='sayac_ekran'>
        <span> {count} </span>
          <img src={resim} alt="sayac_cerceve"/>
      </div>
      </div>


      <div className='button'>
        <button className='tik' onClick={ClickButton}>
          <img src={cerceve} alt='btn_cerceve' />
          <img className='el' src={el} alt='zikir çeken el' />
        </button>
      <span className='yenile' onClick={resetCount}>
      <IoIosRefresh className='resfres'/>
      </span>
      </div>
    </div>

   {/*  <button className='kaydet' onClick={saveCount}>Kaydet</button> */}

    


</>
  )
}

export default Home

