import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import SignUpForm from '../SignUpForm';
import Navbar from '../Navbar';//components

function SignUp() {

  //data from component
  const SignUp_data = details => {
    console.log(details);
  }


  
  return (
    <>
      <Navbar />
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


