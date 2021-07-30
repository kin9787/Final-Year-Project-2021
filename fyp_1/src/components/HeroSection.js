//hero component, handles the main page top section which welcomes the user

import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

import { useHistory } from "react-router-dom";

//hero component
function HeroSection() {

  const history = useHistory();

  //external link
  const pass2prediction = () => {

    history.push('/prediction');
  }


  //external link 
  const pass2about = () => {

    history.push('/about');
  }

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
          onClick={pass2about}
        >
          Learn More
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={pass2prediction}
        >
          Inteligent Predictions <i className='far fa-lightbulb' />
          
        </Button>

      </div>

    </div>

  );
}

export default HeroSection;
