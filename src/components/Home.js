import React,{useEffect, useState} from 'react'
import resim from '../img/sayac_cerceve.png'
import cerceve from '../img/button_cerceve.png'
import el from '../img/zikir_el.png'
import { Grid ,Typography,Box} from '@mui/material'
import '../css/Home.css'
import { IoIosRefresh } from "react-icons/io";
import '../css/WebMenu.css'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router'
import GününHadisi from '../json/GününHadisiJson'





function Home({setzikirCountDizi,zikirCountDizi}) {
  const location =useLocation().state
  const [count, setCount] = useState(zikirCountDizi[location?.index]||0);

  const saveCount = () => {
    toast.success("Başarıyla kaydedildi")
    if(location)
    {
      setzikirCountDizi([...zikirCountDizi.slice(0, location.index), count, ...zikirCountDizi.slice(location.index + 1)]);

    }

  }

  const resetCount = () => {
    setCount(0)
    if(location)
    {
      setzikirCountDizi([...zikirCountDizi.slice(0, location.index), 0, ...zikirCountDizi.slice(location.index + 1)]);
    }
    
  }
  var tarih= new Date(); 
var gun = tarih.getDay(); // var olan günü aldık 1 == pazatesi , 7 == pazar
const [günHadis,setgünHadis]=useState() 
useEffect(()=>{
  if(gun===1)
  {
    setgünHadis(GününHadisi[0].pazartesi)
  }
  if(gun===2)
  {
    setgünHadis(GününHadisi[0].sali)
  }
  if(gun===3){
    setgünHadis(GününHadisi[0].carsamba)
  }
  if(gun===4){
    setgünHadis(GününHadisi[0].persembe)
  }
  if(gun===5){
    setgünHadis(GününHadisi[0].cuma)
  }
  if(gun===6)
  {
    setgünHadis(GününHadisi[0].cumartesi)
  }
  if(gun===7)
  {
    setgünHadis(GününHadisi[0].pazar)
  }
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
      <div className='zikir_ismi' >{location?.name}</div>
      <div className='zikir_sayi' >son kaydedilen zikir : {zikirCountDizi[location?.index]}</div>
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
        <button className='tik' onClick={()=>setCount(count+1)}>
          <img src={cerceve} alt='btn_cerceve' />
          <img className='el' src={el} alt='zikir çeken el' />
        </button>
      <span className='yenile' onClick={resetCount}> {/*<CachedIcon className='resfres'/>*/} 
      <IoIosRefresh className='resfres'/>
      </span>
      </div>
    </div>

    <span className='kaydet' onClick={saveCount}>Kaydet</span>

    


</>
  )
}

export default Home

