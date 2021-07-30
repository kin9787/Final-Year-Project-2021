import React from 'react';
import Footer from '../Footer';
import ChosenProperty from '../ChosenProperty';
import Navbar from '../Navbar';//components

//call componenets 
function PropertyDetails() {
  return (
    <>
      <Navbar />
      <ChosenProperty />
      <Footer />
    </>
  );
}

export default PropertyDetails;