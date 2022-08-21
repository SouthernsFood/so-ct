import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import lightTheme from './themes/lightTheme.js';
import darkTheme from './themes/darkTheme.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavBar from './Components/TopNavBar';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import './styles/App.css';

function App() {
  const theme = useSelector((state) => state.theme.value);

  const defaultContainer = (
    <>
      <TopNavBar />
      <div className='App'>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </>
  );


  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={defaultContainer} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
