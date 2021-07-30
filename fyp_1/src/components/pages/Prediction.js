import '../../App.css';
import Footer from '../Footer';
import PredictionForm from '../PredictionForm';
import React from "react";
import Navbar from '../Navbar';//components


function Prediction() {

  //Accept details from loginform for verification
   const Prediction_data = details => {
    console.log(details);

  }

//call componenets
  return (
    <>
      <Navbar />
      <PredictionForm Predict={Prediction_data} /*error={error}*/ />
      <Footer />
    </>
  );
}

export default Prediction;
