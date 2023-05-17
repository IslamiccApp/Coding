import React from 'react'
import "../css/Bagis.css"
import { Grid, Typography } from '@mui/material'

const Bagis = () => {
  return (
    <>
  
    <Grid display={'flex'} justifyContent={"center"}  container spacing={2} sx={{ padding: '20px' }}>
    <Grid md={5} xs={11} item mt={3} className='hadis_11' mr={2}> {/*Hadis-1 */}
        <Grid container display='flex' alignItems='center' p={'1%'}>
            <Grid xs={12} p={'1%'} item>
                <Typography variant='h4'>

                





                </Typography>
            </Grid>
            <Grid xs={12} p={'1%'} item>
                <Typography variant='h4'  className='zikir_yazi'>
                </Typography>
            </Grid>
        </Grid>
        </Grid>
    </Grid>

    </>    
  )
}

export default Bagis