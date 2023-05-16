import React,{useState} from 'react'
import resim from '../img/sayac_cerceve.png'
import cerceve from '../img/button_cerceve.png'
import el from '../img/zikir_el.png'
import favicon from '../img/favicon.jpg'
import { Grid ,Typography,Box} from '@mui/material'
import '../css/Home.css'



function Home() {
  const [count, setCount] = useState(0);
  <link rel="shortcut icon" type={favicon} href={favicon} /> //icon!!!!!!!!!!!!!!
  return (
    <div>
{/*       <div className='container'>
      <div className='container_text'>
      <h2>Günün Hadisi</h2>
      <span className='text'>
      <p>
      (Allah Rasûlü) “Din nasihattır/samimiyettir” buyurdu. “Kime Yâ Rasûlallah?” diye sorduk. O da; “Allah’a, Kitabına, Peygamberine, Müslümanların yöneticilerine ve bütün müslümanlara” diye cevap verdi. (Müslim, İmân, 95.)
      </p>
      </span>
      </div>
      </div> */}
      <Grid container row='true' p={1} sx={{display:'flex',justifyContent:'center',marginTop:'2vh'}}>
        <Grid xl={10} sm={11} xs={12} className='gününhadisi_home' >
        <center><Typography variant='h2'  fontFamily={'kalam'} className='home_type'>Günün Hadisi</Typography></center>
        <Box>
          <Typography variant='h4' className='gununhadisi_home_yazi'>
          (Allah Rasûlü) “Din nasihattır/samimiyettir” buyurdu. “Kime Yâ Rasûlallah?” diye sorduk. O da; “Allah’a, Kitabına, Peygamberine, Müslümanların yöneticilerine ve bütün müslümanlara” diye cevap verdi. (Müslim, İmân, 95.)
          </Typography>
        </Box>
        </Grid>
      </Grid>
      <div className='sayac'>
      <div className='sayac_ekran'>
        <span> {count} </span>


          <img src={resim} alt="sayac_cerceve"/>
      </div>
      </div>


      <div className='button'>
        <button onClick={()=>setCount(count+1)}>
          <img src={cerceve} alt='btn_cerceve' />
          <img className='el' src={el} alt='zikir çeken el' />
        </button>
      </div>
    </div>

    



  )
}

export default Home

