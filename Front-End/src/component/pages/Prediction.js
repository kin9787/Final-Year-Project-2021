import '../../App.css';
import Footer from '../Footer';
import PredictionForm from '../PredictionForm';
import React from "react";


import { useState } from 'react';

function Prediction() {

  //const [error, setError] = useState("");
  



  //Accept details from loginform for verification
   const Prediction_data = details => {
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

  // const Logout = () => {
  //   console.log("Logout");
  //   //set user to empty to logout
  // }

  return (
    <>
      <div className="Prediction Greet">
        <h2>Fill in the form below to predict!</h2>
      </div>
      <PredictionForm Predict={Prediction_data} /*error={error}*/ />
      <Footer />
    </>
  );
}

export default Prediction;
