import React from 'react'
import '../css/MobilMenu.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MenuIcon from '@mui/icons-material/Menu';

function MobileMenu() {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  const list = (anchor) => (
    <Box 
    className='arkaplan-mobil'
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className='list'>
          <ListItem   className='list-item' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlinedIcon/>
              </ListItemIcon>
              <ListItemText>Ana Sayfa</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem  className='list-item'  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListAltOutlinedIcon/>
              </ListItemIcon>
              <ListItemText>Zikirlemir</ListItemText>
            </ListItemButton>
         </ListItem>
         <ListItem  className='list-item'  disablePadding>
            <ListItemButton> 
              <ListItemIcon>
                <DarkModeOutlinedIcon/>
              </ListItemIcon>
              <ListItemText>Hadisler</ListItemText>
            </ListItemButton>
         </ListItem>
         <ListItem  className='list-item'  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Brightness7OutlinedIcon/>
              </ListItemIcon>
              <ListItemText>Esmaül Hüsna</ListItemText>
            </ListItemButton>
         </ListItem>
         <ListItem  className='list-item'  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ImageSearchOutlinedIcon/>
              </ListItemIcon>
              <ListItemText>Resmi Değiştir</ListItemText>
            </ListItemButton>
         </ListItem>
         <ListItem  className='list-item'  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsOutlinedIcon/>
              </ListItemIcon>
              <ListItemText>Ayarlar</ListItemText>
            </ListItemButton>
         </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{bgcolor:'#D9D9D9'}} className="arkaplan-mobil"><Button onClick={toggleDrawer('left', true)}><MenuIcon/></Button>Zikir App</Box>
      <Drawer
        anchor='left'
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
  )
}

export default MobileMenu
