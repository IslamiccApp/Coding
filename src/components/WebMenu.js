import React from 'react'
import '../css/WebMenu.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from 'react-router-dom';

function WebMenu() {
  return (
    <div className='webmenu-arkaplan'>
        <ul>
            <Link to='/'><li><HomeOutlinedIcon/>Ana Sayfa</li></Link>
            <Link to='/zikirlerim'><li><ListAltOutlinedIcon/>Zikirler</li></Link>
            <Link to='/hadisler'><li><DarkModeOutlinedIcon/>Hadisler</li></Link>
            <Link to='/'><li><Brightness7OutlinedIcon/>Esmaül Hüsna</li></Link>
            <Link to='/'><li><ImageSearchOutlinedIcon/>Resmi Düzenle</li></Link>
            <Link to='/'><li><SettingsOutlinedIcon/>Ayarlar</li></Link>

        </ul>

    </div>
  )
}

export default WebMenu