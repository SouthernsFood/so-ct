import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Header from '../Components/content/Header.js';
import logo_southerns from '../imgs/logo_southerns.svg';
import Stack from '@mui/material/Stack';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div /*style={{ marginTop: '5%' }}*/>
      {user ? (
        <>
          {/* <Header /> */}
          <Stack
            component='form'
            style={{
              width: '40ch',
              margin: 'auto',
              marginTop: '10vh',
              // border: 'solid 1px red',
            }}
            spacing={2}
            noValidate
            autoComplete='off'>
            {/* <Link to='/' > */}
            <img
              src={logo_southerns}
              // className='drawer-logo'
              alt='logo'
              style={{ height: '40vh', width: 'auto', color: 'black' }}
            />
            <h3 style={{ marginTop: '-5vh' }}>Hello, {user.name}!</h3>
            <p>Use the links above to navigate</p>
          </Stack>
        </>
      ) : (
        <h1 style={{ marginTop: '30vh' }}>
          <Link to='/login'>please login first</Link>
        </h1>
      )}
    </div>
  );
};

export default Dashboard;
