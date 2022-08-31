import React from 'react';
import { Button } from '@mui/material';
function Hero() {
  return (
    <div id='home'>
      <div className='hero-container'>
        <div className='hero-text'>
          <h1>Southerns</h1>
          <h2> hmu for catering </h2>
          <Button
            variant='contained'
            color='success'
            className='btn btn-primary'
            onClick={() => {
              window.location.href = '#contact';
            }}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;