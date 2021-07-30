import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';//components

function Home() {
  //import componenets
  return (
    <>
    <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
