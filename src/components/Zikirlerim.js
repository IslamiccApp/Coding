import React from 'react'
import '../css/Zikirlerim.css'
import { Grid, Typography } from '@mui/material'

function Zikirlerim() {
  return (
    <>
    <Grid container row='true' sx={{display:'flex',justifyContent:'center'}}>
        <Grid md={10} xs={11} item mt={3}> {/* başlık ve alt çizgi */}
            <Typography variant='h3' fontFamily={'dancing script'}>
                Kaydedilen Zikirlerim
                <hr/>
            </Typography>
        </Grid>
        <Grid  md={10} xs={11} item className='zikirlerim_zikir_1'> {/* zikir1 */}
            <Grid container>
                <Grid xs={12} p={'1%'}>
                <Typography variant='h4'>Zikir Adı</Typography>
                </Grid>
                <Grid xs={12} p={'1%'}>
                <Typography variant='h4'> “İslâm, güzel ahlâktır.” (Kenzü’l-Ummâl, 3/17, HadisNo: 5225.)</Typography>
                </Grid>
            </Grid>
            <Grid md={6} sm={9} xs={11} p={'1%'}>
            <div className='zikir_skor_ve_butonlar'>
                <Typography variant='h5'>Son Zikir:500</Typography>
                <div>
               <button className='buton_devamet btn'>Devat Et</button>
               <button className='buton_sil btn'>Sil</button>
               </div>
            </div></Grid>
        </Grid>

        <Grid  md={10} xs={11} item className='zikirlerim_zikir_1'> {/* zikir 2 */}
            <Grid container>
                <Grid xs={12} p={'1%'}>
                <Typography variant='h4'>Zikir Adı</Typography>
                </Grid>
                <Grid xs={12} p={'1%'}>
                <Typography variant='h4'>  “İnsanların Peygamberlerden öğrenegeldikleri sözlerden biri de: ‘Utanmadıktan sonra dilediğini yap!’ sözüdür.” (Buhârî, Enbiyâ, 54; EbuDâvûd, Edeb, 6.)</Typography>
                </Grid>
            </Grid>
            <Grid md={6} sm={9} xs={11} p={'1%'}>
            <div className='zikir_skor_ve_butonlar'>
                <Typography variant='h5'>Son Zikir:500</Typography>
                <div>
               <button className='buton_devamet btn'>Devat Et</button>
               <button className='buton_sil btn'>Sil</button>
               </div>
            </div></Grid>
        </Grid>
    </Grid>
    {/*
    <div className='container_zikirler'>
        <div>
            <h1>
                Kaydedilen Zikirlerim
                <hr/>
            </h1>
        </div>
   
    <div className='zikir_1'>
        <div className='zikir_text'>
            <p className='zikir_adi'>
            Zikir 
            </p>
            <p className='zikir_anlami'>
            (Allah Rasûlü) “Din nasihattır/samimiyettir” buyurdu. “Kime Yâ Rasûlallah?” diye sorduk. O da; “Allah’a, Kitabına, Peygamberine, Müslümanların yöneticilerine ve bütün müslümanlara” diye cevap verdi. (Müslim, İmân, 95.)
            </p>
        </div>
        <div className='zikir_btn'>
            <span> Son Zikir : 568</span>
            <span className='btn'>Devam Et</span>
            <span className='btn'>Sıfırla</span>
        </div>
    </div>

    <div className='zikir_1'>
        <div className='zikir_text'>
            <p className='zikir_adi'>
            Zikir 
            </p>
            <p className='zikir_anlami'>
            “İslâm, güzel ahlâktır.” (Kenzü’l-Ummâl, 3/17, HadisNo: 5225.)
            </p>
        </div>
        <div className='zikir_btn'>
            <span> Son Zikir : 568</span>
            <span className='btn'>Devam Et</span>
            <span className='btn'>Sıfırla</span>
        </div>
    </div>

    <div className='zikir_1'>
        <div className='zikir_text'>
            <p className='zikir_adi'>
            Zikir 
            </p>
            <p className='zikir_anlami'>
            “İnsanlara merhamet etmeyene Allah merhamet etmez.” (Müslim, Fedâil, 66; Tirmizî, Birr, 16.)
            </p>
        </div>
        <div className='zikir_btn'>
            <span> Son Zikir : 568</span>
            <span className='btn'>Devam Et</span>
            <span className='btn'>Sıfırla</span>
        </div>
    </div>

    <div className='zikir_1'>
        <div className='zikir_text'>
            <p className='zikir_adi'>
            Zikir 
            </p>
            <p className='zikir_anlami'>
            “Kolaylaştırınız, güçleştirmeyiniz, müjdeleyiniz, nefret ettirmeyiniz.” (Buhârî, İlm, 12; Müslim, Cihâd, 6.)
            </p>
        </div>
        <div className='zikir_btn'>
            <span> Son Zikir : 568</span>
            <span className='btn'>Devam Et</span>
            <span className='btn'>Sıfırla</span>
        </div>
    </div>
    <div className='zikir_1'>
        <div className='zikir_text'>
            <p className='zikir_adi'>
            Zikir 
            </p>
            <p className='zikir_anlami'>
            “İnsanların Peygamberlerden öğrenegeldikleri sözlerden biri de: ‘Utanmadıktan sonra dilediğini yap!’ sözüdür.” (Buhârî, Enbiyâ, 54; EbuDâvûd, Edeb, 6.)
            </p>
        </div>
        <div className='zikir_btn'>
            <span> Son Zikir : 568</span>
            <span className='btn'>Devam Et</span>
            <span className='btn'>Sıfırla</span>
        </div>
    </div>




      
    </div>
  */}
    </>
  )
}

export default Zikirlerim
