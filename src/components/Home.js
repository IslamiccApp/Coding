import React from 'react'
import resim from '../img/sayac_cerceve.png'
import cerceve from '../img/button_cerceve.png'



function Home() {
  return (
    <div>
       <div className='container' >
      <div className='container_text'>
        <h2>Günün Hadisi</h2>
      <span>
      <p>
      (Allah Rasûlü) “Din nasihattır/samimiyettir” buyurdu. “Kime Yâ Rasûlallah?” diye sorduk. O da; “Allah’a, Kitabına, Peygamberine, Müslümanların yöneticilerine ve bütün müslümanlara” diye cevap verdi. (Müslim, İmân, 95.)
      </p>
      </span>
      </div>
    </div>
    <div className='sayac'>
      <div className='sayac_ekran'>
        <span> 9999 </span>


          <img src={resim} alt="sayac_cerceve"/>
      </div>
      </div>
      <div className='button'>
        <button> <img src={cerceve} alt='btn_cerceve' /> </button>
      </div>
    </div>

    



  )
}

export default Home

