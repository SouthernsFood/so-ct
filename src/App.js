// import logo from './logo.svg';
// import southerns_logo from './southerns_logo.svg';
import logo_southerns from './imgs/logo_southerns.svg';
import './App.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo_southerns} className='App-logo' alt='logo' />
        <h1>Coming Soon</h1>
        <div>
          <a
            href='https://www.instagram.com/southernsfood/'
            target='_blank'
            rel='noopener noreferrer'>
            <FaInstagram className='social-media' />
          </a>
          <a
            href='https://www.facebook.com/Southerns-509576972842884'
            target='_blank'
            rel='noopener noreferrer'>
            <FaFacebook className='social-media' />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
