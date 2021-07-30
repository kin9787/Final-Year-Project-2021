import '../../App.css';
import Footer from '../Footer';
import UploadForm from '../UploadForm';
import React from "react";
import Navbar from '../Navbar';//components

function Upload() {

  //Accept details from loginform for verification
  const uploadedData = details => {
    console.log(details);
  }

  return (
    <>
      <Navbar />
      <UploadForm Upload={uploadedData}/>
      <Footer />
    </>
  );
}

export default Upload;
