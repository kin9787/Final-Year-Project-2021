import '../../App.css';
import Footer from '../Footer';
import LoginForm from '../LoginForm';
import React from "react";



function Login() {

  //const [error, setError] = useState("");


  //Accept details from loginform for verification
  const Home_login = details => {
    console.log(details);

    //if (details.email == email from database && details.password == pass from db)
    //console.log("Log in");
    //SEND USER TO HOME Page
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
      <div className="LoginGreet">
        <h2>Welcome!</h2>
      </div>
      <LoginForm Login={Home_login} /*error={error}*/ />
      <Footer />
    </>
  );
}

export default Login;