import React from 'react'
import '../css/WebMenu.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function WebMenu() {
  return (
    <div className='webmenu-arkaplan'>
        <ul>
            <li><HomeOutlinedIcon/>Ana Sayfa</li>
            <li><ListAltOutlinedIcon/>Zikirler</li>
            <li><DarkModeOutlinedIcon/>Hadisler</li>
            <li><Brightness7OutlinedIcon/>Esmaül Hüsna</li>
            <li><ImageSearchOutlinedIcon/>Resmi Düzenle</li>
            <li><SettingsOutlinedIcon/>Ayarlar</li>

        </ul>

    </div>
  )
}

export default WebMenu