import React from 'react'
import { Grid, Typography } from '@mui/material'
import '../css/Esma.css'
import EsmaJson from '../json/EsmaJson'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';



const esma = () => {



  return (
    <div>

        <Grid container row='true' sx={{display:'flex',justifyContent:'center'}}>
        <Grid md={10} xs={11} item mt={3}> {/* başlık ve alt çizgi */}
            <Typography variant='h3' fontFamily={'dancing script'}>
            Esmaül Hüsna
                <hr/>
            </Typography>
        </Grid>
<Grid container row="true"  display='flex' justifyContent='center'> 
        {EsmaJson.map((item,index)=>( 
        
        <Grid md={5} xs={11} item mt={3} className='hadis_11' mr={2}> {/*Hadis-1 */}
        <Grid container display='flex' alignItems='center' p={'1%'}>
            <Grid xs={12} p={'1%'} item>
                <Typography variant='h4'>{index+1}-{item.value } <span className='font'>( {(item.arabic)} </span> )</Typography>
             
            </Grid>
            <Grid xs={12} p={'1%'} item>
                <Typography variant='h4'  className='zikir_yazi'>
                {item.meaning}
                </Typography>
                
            </Grid>
        </Grid>
        </Grid>))}
                
                
                </Grid>
            
    </Grid>
    <a href='#'>
  <ExpandLessIcon className='down' />
    </a>
    </div>

    
  )
}

export default esma
