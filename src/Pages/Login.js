import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { login } from './state/actions/auth';
import logo_southerns from '../imgs/logo_southerns.svg';
const Login = () => {
  return (
    <Stack
      component='form'
      sx={{
        width: '40ch',
        margin: 'auto',
        marginTop: '10vh',
      }}
      spacing={2}
      noValidate
      autoComplete='off'>
        <img src={logo_southerns}
          // className='drawer-logo'
          alt='logo'
          style={{ height: '40vh', width: 'auto', color: 'black' }} />

      <TextField id='outlined-basic' label='email' variant='outlined' />
      <TextField id='outlined-basic' type='password' label='password' variant='outlined' />
      <Button variant='contained' type='submit'>
        Login
      </Button>
    </Stack>
  );
};

export default Login;
