import React from 'react';
import './Button.css';

//Button Design
const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

//Button Size
const SIZES = ['btn--medium', 'btn--large'];

//Button Component
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  //check for design
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  //check for size
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  //html 
  return (
    
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
   
  );
};
