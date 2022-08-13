// import logo from './logo.svg';
// import southerns_logo from './southerns_logo.svg';
import logo_southerns from './logo_southerns.svg';
import './App.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo_southerns} className='App-logo' alt='logo' />
        <h1>Coming Soon</h1>
        <div className='social-media'>
          <a
            href='https://www.instagram.com/southernsfood/'
            target='_blank'
            rel='noopener noreferrer'>
            <FaInstagram style={{ height: '2em', width: '2em' }} />
          </a>
          <a
            href='https://www.facebook.com/Southerns-509576972842884'
            target='_blank'
            rel='noopener noreferrer'>
            <FaFacebook style={{ height: '2em', width: '2em' }} />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
