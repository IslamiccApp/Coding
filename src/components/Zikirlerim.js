import React from 'react'
import '../css/Zikirlerim.css'
import { Grid, Typography } from '@mui/material'
import HadislerJson from '../json/HadislerJson'
import { Link } from 'react-router-dom'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Zikirlerim({zikirCountDizi,setzikirCountDizi}) {
    const resetZikir=(index)=>{
        setzikirCountDizi([...zikirCountDizi.slice(0, index), 0, ...zikirCountDizi.slice(index + 1)]);



    }
  return (
    <>
    <Grid container row='true' sx={{display:'flex',justifyContent:'center'}}>
        <Grid md={10} xs={11} item mt={3}> {/* başlık ve alt çizgi */}
            <Typography variant='h3' fontFamily={'dancing script'}>
                Kaydedilen Zikirlerim
                <hr/>
            </Typography>
        </Grid>
        {       
            HadislerJson.map((item,index)=>(
                <Grid  md={10} xs={11} item className='zikirlerim_zikir_1' key={index}> {/* zikir1 */}
            <Grid container>
                <Grid xs={12} p={'1%'} item>
                <Typography variant='h4'>{item.hadisName}</Typography>
                </Grid>
                <Grid xs={12} p={'1%'} item>
                <Typography variant='h4' className='zikir_yazi'> {item.hadisMean} </Typography>
                </Grid>
            </Grid>
            <Grid md={6} sm={9} xs={11} p={'1%'} item>
            <div className='zikir_skor_ve_butonlar'>
                <Typography variant='h5' mr={2}>Son Zikir:{zikirCountDizi[index]} </Typography>
                <div>
               <Link to='/' state={{name:item.hadisName,index:index}}><button className='buton_devamet btn'>Devat Et</button></Link>
                <button className='buton_sil btn' onClick={()=>resetZikir(index)}>Sıfırla</button>
                </div>
            </div></Grid>
        </Grid>
            )
        )
        }
        
    </Grid>
        
    <a href='#'>
  <ExpandLessIcon className='down' />
    </a>
    </>
  )
}

export default Zikirlerim
