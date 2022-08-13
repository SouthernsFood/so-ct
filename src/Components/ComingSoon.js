import logo_southerns from '../imgs/logo_southerns.svg';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const ComingSoon = () => {
  return (
    <>
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
    </>
  );
};

export default ComingSoon;
