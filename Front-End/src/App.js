import React from 'react';
import Navbar from './components/Navbar';//components
import './App.css';//css
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';//link

//Pages
import Home from './components/pages/Home';
import Prediction from './components/pages/Prediction';
import PropertyListing from './components/pages/PropertyListing';
import SignUp from './components/pages/SignUp';
import checkUploaded from './components/pages/checkUploaded';
import Login from './components/pages/Login';
import Upload from './components/pages/Upload';
import Profile from './components/pages/Profile';


function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Switch>

          <Route path='/' exact component={Home} />
          <Route path='/prediction' component={Prediction} />
          <Route path='/property-listing' component={PropertyListing} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/check-uploaded' component={checkUploaded} />
          <Route path='/login' component={Login} />
          <Route path='/upload' component={Upload} />
          <Route path='/profile' component={Profile} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
