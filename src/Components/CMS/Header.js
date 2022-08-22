
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { logout, reset } from '../../state/features/auth/authSlice.js';
import { FaSignOutAlt } from 'react-icons/fa';


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Header = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    //  navigate('/login');
  };

  return (
    <div role='presentation' onClick={handleClick}>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='inherit' href='/'>
          Events
        </Link>
        <Link underline='hover' color='inherit' href='/material-ui/getting-started/installation/'>
          Menu
        </Link>
        <Link
          underline='hover'
          color='text.primary'
          href='/material-ui/react-breadcrumbs/'
          aria-current='page'>
          Emails
        </Link>
      <Button onClick={onLogout}>
        Logout &ensp; <FaSignOutAlt />
      </Button>
      </Breadcrumbs>
    </div>
  );
};

export default Header;