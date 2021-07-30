//Navigation Bar component, act as a guide to other pages.

import React, { useState, useEffect  } from 'react'; //hooks
import { Button } from './Button'; //button componenet
import { Link } from 'react-router-dom'; //connector
import './Navbar.css'; //css
import Dropdown from './Dropdown';

import UserProfile from './USERSESSION'; 

//whole navbar component
function Navbar() {

  //hooks
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [loginState, setloginState] = useState(true);
  const [loginStateReverse, setloginStateReverse] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  
  //hooks handler
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const LogoutFunc = () => {
    UserProfile.setName("");
    UserProfile.setKey("");
  }

  //if size < 960, turn to burger icon
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  }

  const checklogin = () => {
    if (UserProfile.getKey() === "Passed") {
      console.log("Logged In")
      setloginState(false);
      setloginStateReverse(true);
    } else {
      console.log("Not Logged In")
      setloginState(true);
      setloginStateReverse(false);
    }
  };

  //rerender function
  useEffect(() => {
    
    console.log("Loaded Nav Bar, Login Checked")
    checklogin()
    showButton()
  }, []);

  //call function when resize is made
  window.addEventListener('resize', showButton);
  window.addEventListener('resize', checklogin);

  //html part
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            PP
            <i class='fas fa-home' /> 
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/prediction'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Price Forecast
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/property-listing'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Property Listing
              </Link>
            </li>

            {loginState &&
            <li className='nav-item'>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>}
            
            {loginState &&
            <li>
            
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>}

            {loginStateReverse &&
            <li>  
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu, LogoutFunc}
              >
                Logout 
              </Link>
              
            </li>}
            
            {loginStateReverse &&
            <li          
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}         
            >  
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                More <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown />}
            </li>}

          </ul>
          <Link to='/sign-up' className='btn-mobile'>
          {loginState && button && <Button buttonStyle='btn--outline'>Register</Button>}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
