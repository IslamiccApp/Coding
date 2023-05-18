import React from 'react'
import '../css/WebMenu.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';

import { Link } from 'react-router-dom';
import "../css/WebMenu.css"
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
function WebMenu() {
  return (
    <>
    <span className='back'> 
    <div className='webmenu-arkaplan'>
        <ul>
            <Link to='/'><li><HomeOutlinedIcon/>Ana Sayfa</li></Link>
            <Link to='/zikirlerim'><li><ListAltOutlinedIcon/>Zikirler</li></Link>
            <Link to='/hadisler'><li><DarkModeOutlinedIcon/>Hadisler</li></Link>
            <Link to='/esma-ül-hüsna'><li><Brightness7OutlinedIcon/>Esmaül Hüsna</li></Link>
            <Link to='/resimdegistir'><li><ImageSearchOutlinedIcon />Resmi Düzenle</li></Link>
            <Link to='/bagis'><li><VolunteerActivismOutlinedIcon />Bağış Ve Yardım</li></Link>
        </ul>

    </div>
    </span>
  </>
  )
}

export default WebMenu