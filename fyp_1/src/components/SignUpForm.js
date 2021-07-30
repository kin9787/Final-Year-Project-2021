import React, {useState} from 'react';
import './SignUpForm.css';//css
import { Link } from 'react-router-dom'; //connector

import {registerData} from '../api/api'

function SignUpForm({SignUpData,error}) {

  const [details,setDetails] = useState({username:"", email:"",password:"", password2:""});
  const [passwordError, setpasswordError] = useState("");

    const submitHandler = e => {
      e.preventDefault();
      if (details.email === "" || details.password === "" || details.username === "" || details.password2 === ""){
        setpasswordError("Please fill in all forms");
        console.log("Please fill in all forms");
      }

      else{
        if (details.password === details.password2) {
          console.log("Matched");
          //Send details to SignUpData.js for verification
           SignUpData(details);
           
           registerData(details)
              .then( 
                function (res) {
                  console.log("User Registered")
                  setpasswordError("Sucess! Please navigate to login to login");
                }            
                )
              .catch(err => console.log(err))
           
           console.log("Signed Up");
        }
      else{
        setpasswordError("Missmatched password or username try again");
        console.log("Missmatched password or username try againz");
         
      }
      }      
    }

  return (
    
    <div className='form-signup'>
      <form onSubmit={submitHandler} className='form' noValidate>
        <h1 className="signup-greet">
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        {(passwordError !=="") ? (<div className="errorInLogIn">{passwordError}</div>): ""}
        {(error !=="") ? (<div className="errorInLogIn">{error}</div>): ""}
        <div className='form-signup-inputs'>
          <label className='form-label'><i class="fas fa-user"/> Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            onChange={e => setDetails({...details, username:e.target.value})}
            value={details.username}
          />
        </div>

        <div className='form-signup-inputs'>
          <label className='form-label'><i class="far fa-envelope"/> Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            onChange={e => setDetails({...details, email:e.target.value})}
            value={details.email}
          />
        </div>

        <div className='form-signup-inputs'>
          <label className='form-label'><i class="fas fa-key"/>  Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            onChange={e => setDetails({...details, password:e.target.value})}
            value={details.password}
          />
        </div>

        <div className='form-signup-inputs'>
          <label className='form-label'><i class="fas fa-key"/>  Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            onChange={e => setDetails({...details, password2:e.target.value})}
            value={details.password2}
          />
        </div>

        <button className='form-signup-btn' type='submit'>
          Sign up
        </button>

        <span className='form-input-login'>
          Already have an account? Login <Link to='/login'>Here</Link>
        </span>
      </form>
    </div>
  );
};

export default SignUpForm;