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
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';

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
          <Link to='/'>
          <ListItem  className='list-item' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlinedIcon fontSize='large'/>
              </ListItemIcon>
              <ListItemText>
                <Typography variant='h5'color=' rgb(66, 87, 62)'>Ana Sayfa</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          </Link>


          <Link to='/zikirlerim'>
          <ListItem  className='list-item'  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListAltOutlinedIcon fontSize='large'/>
              </ListItemIcon>
              <ListItemText>
                <Typography variant='h5'color=' rgb(66, 87, 62)'>Zikirlerim</Typography>
                </ListItemText>
            </ListItemButton>
         </ListItem>
          </Link>



         <Link to='/hadisler' >
         <ListItem  className='list-item'  disablePadding>
            <ListItemButton> 
              <ListItemIcon>
                <DarkModeOutlinedIcon fontSize='large'/>
              </ListItemIcon>
              <ListItemText className='yazii'>
              <Typography variant='h5' color=' rgb(66, 87, 62)'>Hadisler</Typography>
                </ListItemText>
            </ListItemButton>
         </ListItem>
          </Link>

          <Link to='/esma-ül-hüsna' >
         <ListItem  className='list-item'  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Brightness7OutlinedIcon fontSize='large'/>
              </ListItemIcon>
              <ListItemText>
              <Typography variant='h5'color=' rgb(66, 87, 62)'>Esmaül Hüsna</Typography>
              </ListItemText>
            </ListItemButton>
         </ListItem>
         </Link >
         <Link to="/mobilmenudegistir">
         <ListItem  className='list-item'  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ImageSearchOutlinedIcon fontSize='large'/>
              </ListItemIcon>
              <ListItemText>
              <Typography variant='h5' color=' rgb(66, 87, 62)'>Resmi Değiştir</Typography>
              </ListItemText>
            </ListItemButton>
         </ListItem>
         </Link> 
        <Link to="/bagis">
         <ListItem  className='list-item'  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <VolunteerActivismOutlinedIcon fontSize='large'/>
              </ListItemIcon>
              <ListItemText>
              <Typography variant='h5' color=' rgb(66, 87, 62)'>Bağış ve Yardım</Typography>
              </ListItemText>
            </ListItemButton>
         </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{bgcolor:'#D9D9D9',p:1}} className="arkaplan-mobil">
        <Box display='flex' alignItems='center'>
          <Button onClick={toggleDrawer('left', true)} size='small'><MenuIcon fontSize='large'/></Button>
        <Typography variant='h4'>Zikir App</Typography>
        </Box>
        
        </Box>
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
