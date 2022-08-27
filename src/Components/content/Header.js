import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { logout, reset } from '../../state/features/auth/authSlice.js';
import { FaSignOutAlt, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/login');
  };

  const links = [ 'events', 'menu', 'emails' ];
  const ariaCurrent = (l) => window.location.pathname === `/content/${l}` ? 'page' : 'false';  
  return (
    <div
      role='presentation'
      // onClick={handleClick}
      style={{
        marginBottom: '50px',
        borderBottom: 'solid 2px black',
        display: 'table',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px',
        paddingLeft: '5vw',
        paddingRight: '5vw',
      }}>
      <Breadcrumbs aria-label='breadcrumb' className='header-container'>
        <Button onClick={() => navigate('/')}>
          <FaHome />
        </Button>
        {links.map((link, index) => (
          <Link
            key={`${link}-${index}`}
            className='cms-header-link'
            underline='hover'
            color='text.primary'
            onClick={() => navigate(link)}
            aria-current={ariaCurrent(link)}>
            {link}
          </Link>
        ))}
        <Button onClick={onLogout}>
          Logout &ensp; <FaSignOutAlt />
        </Button>
      </Breadcrumbs>
    </div>
  );
};

export default Header;
