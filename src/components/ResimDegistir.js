import React from 'react'
import '../css/ResimDegistir.css'
import {Grid} from '@mui/material'
import ResimJson from '../json/ResimJson'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';




const ResimDegistir = () => {



    const changePhoto = (abc) => {
        document.body.style.backgroundImage = `url(${abc})`;
        localStorage.setItem('resim',abc)
    }

    


    console.log(ResimJson);
  return (
    <div>
        <Grid  container  p={5} spacing={3} display={'flex'} justifyContent={'center'} >
            {
                ResimJson.map((item,index)=>(
                    <Grid item xl={3} md={4} xs={11} p={2} borderRadius={5} m={1} bgcolor={"#e4d6ca"} key={index}>
                <div className='container_degistir'> 
                    <div className='degistir'>
                        <img src={item} alt="asd" />
                     </div>
                    <span className='degistir_btn' onClick={()=>changePhoto(item)}>Resmi değiştir</span>
                </div> 
            </Grid>
                ))
            }
           
        </Grid>
        <a href='#'>
  <ExpandLessIcon className='down' />
    </a>
    </div>
  )
}

export default ResimDegistir
