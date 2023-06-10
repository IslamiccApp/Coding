import React from 'react'
import  '../css/Hadisler.css'
import { Grid ,Typography } from '@mui/material'
import GercekHadislerJson from '../json/GercekHadisJson.js'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


function Hadisler() {
  return (
    <>


    <Grid container row='true' sx={{display:'flex',justifyContent:'center'}}>
        <Grid md={10} xs={11} item mt={3}> {/* başlık ve alt çizgi */}
            <Typography variant='h3' fontFamily={'dancing script'}>
                Hadislerden Seçmeler
                <hr/>
            </Typography>
        </Grid>
        {
        GercekHadislerJson.map((item,index)=>(

        <Grid key={index} md={10} xs={11} item mt={3} className='hadis_11'> {/*Hadis-1 */}
        <Grid container display='flex' alignItems='center' p={'1%'}>
            <Grid xs={12} p={'1%'} item>
                <Typography variant='h4'>{item}</Typography>
            </Grid>
        </Grid>
        </Grid>
      
      )) }


        </Grid>
     
        <a href='#'>
  <ExpandLessIcon className='down' />
    </a>
   

    </>

  )
}
export default Hadisler
