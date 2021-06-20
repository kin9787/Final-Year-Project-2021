import '../../App.css';
import Footer from '../Footer';
import UploadForm from '../UploadForm';
import React from "react";
//import { useState } from 'react';

import {newProperty} from '../../api/api'

function Upload() {

  //const [error, setError] = useState("");


  //Accept details from loginform for verification
  const uploadedData = details => {
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
      <div className="Upload Greet">
        <h2>Fill in the form below to upload your house!</h2>
      </div>
      <UploadForm Upload={uploadedData} /*error={error}*/ />
      <Footer />
    </>
  );
}

export default Upload;
