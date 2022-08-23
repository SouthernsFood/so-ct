import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import lightTheme from './themes/lightTheme.js';
import darkTheme from './themes/darkTheme.js';
import TopNavBar from './Components/TopNavBar';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Dashboard from './Pages/Dashboard.js';
import Error from './Pages/Error.js';
import Header from './Components/CMS/Header.js';
import Events from './Components/CMS/Events.js';
import Emails from './Components/CMS/Emails.js';
import Menu from './Components/CMS/Menu.js';

import './styles/App.css';


function App() {
  const {value: theme} = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.auth);

  const defaultContainer = (
    <>
      <TopNavBar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </>
  );
  const loginContainer = (
    <>
      <div className='cms'>
        <Routes>
          <Route index element={<Login />} />
        </Routes>
      </div>
    </>
  );

  const cmsContainer = (
    <>
      {
        user ? <Header/> : null
      }
      <div className='cms'>
        <Routes>    
          <Route index element={<Dashboard />} />
          <Route path='/events' element={<Events />} />
          <Route path='/emails' element={<Emails />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </div>
    </>
  );

  return (
    <>
      <Router>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <CssBaseline />
          <Routes>
            <Route path='/login/*' element={loginContainer} />
            <Route path='/content/*' element={cmsContainer} />
            <Route path='/*' element={defaultContainer} />
          </Routes>
        </ThemeProvider>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
