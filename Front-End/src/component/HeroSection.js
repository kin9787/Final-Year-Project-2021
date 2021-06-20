//hero component, handles the main page top section which welcomes the user

import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

//hero component
function HeroSection() {

  //html
  return (

    <div className='hero-container'>

      <video src='/videos/video-1.mp4' autoPlay loop muted />

      <h1>Property Platform</h1>

      <p>Your trusted intelligent property website</p>

      <div className='hero-btns'>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Learn More
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('Detected')}
        >
          Predictions <i className='far fa-lightbulb' />
          
        </Button>

      </div>

    </div>

  );
}

export default HeroSection;
