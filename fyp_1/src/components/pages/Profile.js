import '../../App.css';
import Footer from '../Footer';
import ProfileUpdate from '../ProfileUpdate';
import React from "react";
import Navbar from '../Navbar';//components

function Prediction() {

  //Accept details from loginform for verification
  const Profile_data = details => {
    console.log(details);

  }

  //call for profile update function as componenets
  return (
    <>
      <Navbar />
      <div className="Prediction Greet">
        <h2>Fill in the form below to predict!</h2>
      </div>
      <ProfileUpdate Profile_update={Profile_data} /*error={error}*/ />
      <Footer />
    </>
  );
}

export default Prediction;
