import '../../App.css';
import Footer from '../Footer';
import LoginForm from '../LoginForm';
import React from "react";
import Navbar from '../Navbar';//components

function Login() {
  //Accept details from loginform for verification
  const Home_login = details => {
    console.log(details);
  }

  //call components
  return (
    <>
      <Navbar />
      <LoginForm Login={Home_login} /*error={error}*/ />
      <Footer />
    </>
  );
}

export default Login;