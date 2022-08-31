import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import Header from '../Components/content/Header.js';
import logo_southerns from '../imgs/logo_southerns.svg';
import Stack from '@mui/material/Stack';

import { useEffect } from 'react';
import { getAllEmails, reset } from '../state/features/mail/mailSlice.js';
import { toast } from 'react-toastify';
import Spinner from '../Components/Spinner.js';


const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { inbox, isLoading, isError, isSuccess, message } = useSelector((state) => state.mail);
  // const state = useSelector((state) => state.mail);
  
  console.log(inbox);



  useEffect(() => {
    if (!inbox.length) {
      dispatch(getAllEmails());
    }
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [isError, isSuccess, message, dispatch, inbox]);

  if (isLoading) {
    return <Spinner />;
  }

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
