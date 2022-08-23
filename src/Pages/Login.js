import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../state/features/auth/authSlice.js';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import Spinner from '../Components/Spinner.js';
import logo_southerns from '../imgs/logo_southerns.svg';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate('/content');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);





  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
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
      {/* </Link> */}
      <TextField
        id='outlined-basic'
        name='email'
        label='email'
        variant='outlined'
        onChange={handleChange}
      />

      <TextField
        id='outlined-basic'
        type='password'
        name='password'
        label='password'
        variant='outlined'
        onChange={handleChange}
      />

      <Button variant='contained' type='submit' onClick={handleSubmit}>
        Login &ensp;
        <FaSignInAlt />
      </Button>
    </Stack>
  );
};

export default Login;
