import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import { useDispatch, useSelector } from 'react-redux';
// import { setTheme } from '../state/features/themeSlice';
import logo_southerns from '../imgs/logo_southerns.svg';
const drawerWidth = 240;
const navItems = ['Home', /*'About',*/ 'Schedule', 'Menu', /*'Merch',*/ 'Contact'];

function TopNavBar() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const theme = useSelector((state) => state.theme.value);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img
        src={logo_southerns}
        className='drawer-logo'
        alt='logo'
        style={{ height: '10vh', width: 'auto', color: 'black' }}
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              href={`#${item.toLowerCase()}`}
              LinkComponent={href => <a href={href}>{item}</a>}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box style={{ display: 'flex' }}>
      <AppBar component='nav' style={{ height: '8vh' }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>

          <img
            src={logo_southerns}
            className='nav-logo'
            alt='logo'
            onClick={() => {
              window.location.href = '#home';
            }}
            style={{
              height: '90%',
              width: 'auto',
              display: 'inline-block',
              marginRight: '2vw',
              cursor: 'pointer',
            }}
          />
          <Box
            sx={{ display: { xs: 'none', sm: 'block' }, /*border: 'solid 1px red',*/ width: '75%',
              position: 'relative', top: '0.25vh', left: '-1vw', textAlign: 'center' 
            }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: '#fff', /*border: 'solid 1px red',*/ margin: '0.5vh 2vw', textAlign: 'center',
                  fontSize: '2.5vh', cursor: 'pointer'
                }}
                onClick={() => {
                  window.location.href = `#${item.toLowerCase()}`;
                }}>
                {item}
              </Button>
            ))}
          </Box>
          {/* <Button
            color='inherit'
            onClick={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}>
            {theme === 'light' ? <LightModeIcon /> : <DarkModeOutlinedIcon />}
          </Button> */}
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          // container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default TopNavBar;
