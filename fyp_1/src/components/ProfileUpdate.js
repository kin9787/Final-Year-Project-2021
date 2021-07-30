import React, {useState, useEffect} from 'react';
import './ProfileUpdate.css';//css

import { useHistory } from "react-router-dom";

import UserProfile from './USERSESSION'; 

import {updatePersonalData,extractPersonalData } from '../api/api'

function PredictionForm({Profile_update}) {

  const history = useHistory();
  const [details,setDetails] = useState({username:"", email:"",password:""});
  const [passwordError, setpasswordError] = useState("");
  const [oldpassword, setOldPassword] = useState({oldPassword:""});


const submitHandler = e => {
  e.preventDefault();
  if (details.password === oldpassword.oldPassword) {
    console.log("Matched");
    //Send details to SignUpData.js for verification
    Profile_update(details);
    updatePersonalData(details)
          .then(   
            function (res) {
              setpasswordError("Updated");
              console.log("Updated, API Sent")
              history.push('/');           
            }
          )
          
          .catch(
            err => console.log(err)

          )
       }

  else{
    setpasswordError("Missmatched password try again");
    console.log("Missmatched password try againz");
      }

  
  
  }
  //rerender function
  useEffect(() => {
    console.log(UserProfile.getName())
    let dataUser = {user:UserProfile.getName()}
    extractPersonalData(dataUser)
      .then( 
      function (res) {
        console.log(res)
        setDetails({username:res.serverRes.details[0].username, email:res.serverRes.details[0].email})
        setOldPassword({oldPassword:res.serverRes.details[0].password})
                     }
            )
      .catch(
        err => console.log(err)
                    )

    

  }, []);

  return (
    
    <div className='profile-form'>
      
      <form onSubmit={submitHandler} className='real-profile-form' noValidate>
      <div className="profile-update-content-box">
        <h1>
        User Profile
        </h1>
        {(passwordError !=="") ? (<div className="errorInLogIn">{passwordError}</div>): ""}
        {details.username ===""? null:
        <div className='form-profile-update-inputs'>
          <label className='form-label'>Username</label>
          <label className='form-input'>{details.username} </label>
        </div>
        }

        <div className='form-profile-update-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            onChange={e => setDetails({...details, email:e.target.value})}
            value={details.email}
          />
        </div>

        <div className='form-profile-update-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            onChange={e => setDetails({...details, password:e.target.value})}
            value={details.password}
          />
        </div>

        

        <button className='form-update-profile-btn' type='submit'>
          Update
        </button>
        </div>
      </form>
      
    </div>
  );
};

export default PredictionForm;