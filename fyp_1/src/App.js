import React from 'react';
import './App.css';//css
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';//link

//Pages
import Home from './components/pages/Home';
import Prediction from './components/pages/Prediction';
import PropertyListing from './components/pages/PropertyListing';
import SignUp from './components/pages/SignUp';
import CheckUploaded from './components/pages/CheckUploaded';
import Login from './components/pages/Login';
import Upload from './components/pages/Upload';
import Profile from './components/pages/Profile';
import PropertyDetails from './components/pages/PropertyDetails';
import About from './components/pages/About';


function App() {
  
  return (
    <>
      <Router>
        
        <Switch>

          <Route path='/' exact component={Home} />
          <Route path='/prediction' component={Prediction} />
          <Route path='/property-listing' component={PropertyListing} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/check-uploaded' component={CheckUploaded} />
          <Route path='/login' component={Login} />
          <Route path='/upload' component={Upload} />
          <Route path='/profile' component={Profile} />
          <Route path='/property-details' component={PropertyDetails} />
          <Route path='/about' component={About} />

          <Route path='/insta-to-go' component={() => {  window.location.href = 'https://www.instagram.com/';  return null}}/>
          <Route path='/facebook-to-go' component={() => {  window.location.href = 'https://www.facebook.com/Property-Platform-101346552233929/';  return null}}/>
          <Route path='/linkedin-to-go' component={() => {  window.location.href = 'https://www.linkedin.com/in/chen-chee-kin-2b6664157';  return null}}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
