import React, { useState } from "react";
import './LoginForm.css';
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
        //login api call
        loginData(details)
          .then(    
            function (res) {
              console.log("Redirected to homepage")
              if(res.details.password === details.password){
                setloginError("Login Sucess!")
                UserProfile.setName(details.username);
                UserProfile.setKey("Passed");
                history.push('/');}
              else{
                  setloginError("Login Failed")
                }
              
              }

              
                )

          .catch(
            function (err) {
              if(err === false){
                setloginError("Login Sucess!")}
              else{
                  setloginError("Login Failed")
                }
              
              }
            
          )       
    }

    return (
    <>
      <form onSubmit={submitHandler}>
      <div className="form-content-right">
      <div className="content-box">
      <h1>Welcome back!</h1>
        <h2>Login</h2>

        {(loginError !=="") ? (<div className="errorInLogIn">{loginError}</div>): ""}
        
        <div className="form-logins">
          <label className='form-label' htmlFor="username"><i class="fas fa-user"/>  Username:</label>
          
          <input 
          className='form-input'
          type="text" 
          name="username" 
          id="username" 
          onChange={e => setDetails({...details, username:e.target.value})} 
          value={details.username}/>
        </div>

        <div className="form-logins">
          <label className='form-label' htmlFor="password"> <i class="fas fa-key"/>  Password:</label>
          <input 
          className='form-input'
          type="password" 
          name="password" 
          id="password" 
          onChange={e => setDetails({...details, password:e.target.value})} 
          value={details.password}/>
        </div>

        <button className='form-login-btn' type='submit'>
          Login
        </button>
        </div>
      </div>
      </form>
    </>
  );
}

export default LoginForm;