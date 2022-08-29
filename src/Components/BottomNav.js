import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import StorefrontIcon from '@mui/icons-material/Storefront';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArticleIcon from '@mui/icons-material/Article';
// import NewspaperIcon from '@mui/icons-material/Newspaper';

const BottomNav = () => {
  const [value, setValue] = useState(0);

  return (
    <Box style={{ width: '100%',  }}>
    





      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction
          label='Instagram'
          href='https://www.instagram.com/southernsfood/'
          target='_blank'
          icon={<InstagramIcon />}
        />
        <BottomNavigationAction
          href='https://www.facebook.com/Southerns-509576972842884'
          target='_blank'
          label='Facebook'
          icon={<FacebookIcon />}
        />
        <BottomNavigationAction
          href='https://www.tinybuffaloclothing.com/product-category/tshirts/southerns-tshirts/'
          target='_blank'
          label='Merch'
          icon={<StorefrontIcon />}
        />
        <BottomNavigationAction label='News' icon={<ArticleIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNav;
