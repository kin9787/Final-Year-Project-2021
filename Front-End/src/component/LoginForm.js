import React, { useState } from "react";
import './SignUpForm.css';
import UserProfile from './USERSESSION'; 

import { useHistory } from "react-router-dom";


import {loginData} from '../api/api'

function LoginForm({Login}) {

  const history = useHistory();


    const [details,setDetails] = useState({username:"",password:""});
    const [loginError, setloginError] = useState("");

    const submitHandler = e => {
        e.preventDefault();

        //Send details to Login.js for verification
        Login(details);


        loginData(details)
          .then( 
            
            function (res) {
              console.log("Redirected to homepage")
              if(res.details.password === details.password){

                        UserProfile.setName(details.username);
                        UserProfile.setKey("Passed");
                        history.push('/');
                        
            }

          }
          )
          
          .catch(
            err => console.log(err),
            setloginError("Password or Username Missmatch")

          )

        

        
    }

    return (
    <>
      <form onSubmit={submitHandler}>
      <div className="form-content-right">
        <h2>Login</h2>

        {(loginError !=="") ? (<div className="errorInLogIn">{loginError}</div>): ""}
        
        <div className="form-inputs">
          <label className='form-label' htmlFor="username">Username:</label>
          
          <input 
          className='form-input'
          type="text" 
          name="username" 
          id="username" 
          onChange={e => setDetails({...details, username:e.target.value})} 
          value={details.username}/>

        </div>

        <div className="form-inputs">
          <label className='form-label' htmlFor="password">Password:</label>
          
          <input 
          className='form-input'
          type="password" 
          name="password" 
          id="password" 
          onChange={e => setDetails({...details, password:e.target.value})} 
          value={details.password}/>

        </div>
        
        <button className='form-input-btn' type='submit'>
          Login
        </button>

      </div>
      </form>
    </>
  );
}

export default LoginForm;