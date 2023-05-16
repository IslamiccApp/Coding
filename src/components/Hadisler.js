import React from 'react'
import  '../css/Hadisler.css'
import { Grid ,Typography } from '@mui/material'

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
        <Grid md={10} xs={11} item mt={3} className='hadis_11'> {/*Hadis-1 */}
        <Grid container display='flex' alignItems='center' p={'1%'}>
            <Grid xs={12} p={'1%'}>
                <Typography variant='h4'>Hadis Adı</Typography>
            </Grid>
            <Grid xs={12} p={'1%'}>
                <Typography variant='h4'  className='zikir_yazi'>
                (Allah Rasûlü) “Din nasihattır/samimiyettir” buyurdu. “Kime Yâ Rasûlallah?” diye sorduk. O da; “Allah’a, Kitabına, Peygamberine, Müslümanların yöneticilerine ve bütün müslümanlara” diye cevap verdi. (Müslim, İmân, 95.)
                </Typography>
            </Grid>
        </Grid>
        </Grid>

        <Grid md={10} xs={11} item mt={3} className='hadis_11'> {/*Hadis-1 */}
            <Grid container display='flex' alignItems='center' p={'1%'}>
                <Grid xs={12} p={'1%'}>
                    <Typography variant='h4'>Hadis Adı</Typography>
                </Grid>
                <Grid xs={12} p={'1%'}>
                    <Typography variant='h4'  className='zikir_yazi'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                    </Typography>
                </Grid>
            </Grid>
        </Grid>

    </Grid>

   {/* <div className='hadis'>
        <div className='baslik'>
            <div className='container_hadis'>
                <h1>
                    Hadislerden Seçmeler
                    <hr/>
                </h1>
            </div>
        </div>
        <div className='hadis_1'>
            <div className='hadis_text'>
                <p className='hadis_adi'>
                Günün Hadisi
                </p>
                    <p className='zikir_anlami'>
                    (Allah Rasûlü) “Din nasihattır/samimiyettir” buyurdu. “Kime Yâ Rasûlallah?” diye sorduk. O da; “Allah’a, Kitabına, Peygamberine, Müslümanların yöneticilerine ve bütün müslümanlara” diye cevap verdi. (Müslim, İmân, 95.)
                    </p>
            </div>
        </div>
        <div className='hadis_1'>
            <div className='hadis_text'>
                <p className='hadis_adi'>
                Güzel Hadis
                </p>
                    <p className='zikir_anlami'>
                    “İslâm, güzel ahlâktır.” (Kenzü’l-Ummâl, 3/17, HadisNo: 5225.)
                    </p>
            </div>
        </div>
        <div className='hadis_1'>
            <div className='hadis_text'>
                <p className='hadis_adi'>
                Woaw Hadis
                </p>
                    <p className='zikir_anlami'>
                    “İnsanlara merhamet etmeyene Allah merhamet etmez.” (Müslim, Fedâil, 66; Tirmizî, Birr, 16.)
                    </p>
            </div>
        </div>
    </div>
  */}
    </>

  )
}

export default Hadisler
