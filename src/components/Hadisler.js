import React from 'react'
import  '../css/Hadisler.css'

function Hadisler() {
  return (

    <div className='hadis'>
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


  )
}

export default Hadisler
