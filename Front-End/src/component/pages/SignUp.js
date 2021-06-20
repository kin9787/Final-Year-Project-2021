import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import SignUpForm from '../SignUpForm';
//import FormSubmitted from '../FormSubmitted';
//import { useState } from 'react';

import {registerData} from '../../api/api'

function SignUp() {

  const SignUp_data = details => {
    console.log(details);

    //if (details.email == email from database && details.password == pass from db)
    //console.log("Log in");
    //setUser
    //else{
    // console.log("Wrong")
    //}
    // else{
    //   comolse.log("Wrong")
    //   setError("Wrong")
    // }
  }

  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          
        </div>
        
          <SignUpForm SignUpData={SignUp_data}/>
        
      </div>
      <Footer />
    </>
  );
 
        }
export default SignUp;

//<img className='form-img' src='img/img-2.svg' alt='spaceship' />

