import React from 'react'
import "../css/Bagis.css"
import { Grid, Typography } from '@mui/material'

const Bagis = () => {
  return (
    <>
     <Grid display={'flex'} justifyContent={"center"}  container spacing={2} sx={{ padding: '20px' }}>
    <Grid md={5} xs={11} item mt={3} className='hadis_11' padding={0} > {/*Hadis-1 */}
        <Grid container display='flex' alignItems='center' p={'1%'}>
            <Grid xs={12} p={'1%'} item>
                <Typography variant='h4'>
                </Typography>
            </Grid>
            <Grid xs={12} p={'1%'} item>
            <Typography variant='h4'  className='zikir_yazi'>
              <div class="bagis"> 
                <span className='yardim_img'> </span>
              </div>
            </Typography>

                <Typography variant='h4'  className='zikir_yazi'>
                {/* &nbsp; Yapmış olduğunuz yardımlardan dolayı <b><i>‘Allah Azze ve Celle’ </i></b> sizlerden razı olsun. Rabbimiz günahlarımızı bağışlasın ve ayaklarımızı da dini üzere sabit kılsın. */}
                &nbsp;Yaptığımız yardımlardan dolayı günahlarımızı affet ve merhametinle kuşat. Ayaklarımızı sarsılmaz bir şekilde dini üzere sabit kıl.
                 İlahi rahmetinle kalplerimizi nurlandır, doğru yolu bulmamızı sağla. 
                <br/>
                <br/>
                &nbsp; İki yazılım öğrencisi olarak çıktığımız yolda böyle bir proje yapmak istedik İNŞALLAH herkese faydası dokunur. Yardımlarınız için şimdiden çok teşekkür ederiz.
                </Typography>
        
                <Typography variant='h4'  className='zikir_yazi'>
                &nbsp;&nbsp;
                <p>Erkan KOLAKAN</p>
                <p className='ibantxt'>IBAN: </p>
                <p  className='ibanno'>TR27 0001 0008 2796 0263 3550 01</p>
                
                </Typography>
            </Grid>
        </Grid>
        </Grid>
    </Grid>


    </>    
  )
}

export default Bagis