import React, { useEffect, useState } from "react";
import PersonalSingleProperty from "./PersonalSingleProperty";
import "./PropertyList.css"
import './PersonalPropertyListing.css';//css

import {deletePersonalProperty} from '../api/api'
import UserProfile from './USERSESSION'; 

const PropertyList = ({ data, setKeywords, keywords }) => {

  const [details,setDetails] = useState({propertyID:""});
  const [filteredData, setfilteredData] = useState([]);
  const [deleteError, setdeleteError] = useState("");

  const deleteProperty = () => {
    let propertyKey = {propertykey: details.propertyID, user: UserProfile.getName()}
    deletePersonalProperty(propertyKey)
              .then( 
                function (res) {
                  setdeleteError("Property Deleted")
                }
              
                )
              .catch(function (err) {
                if(err === false){
                  setdeleteError("Login Sucess!")}
                else{
                  setdeleteError("Login Failed")
                  }
                
                })
  }

  const modifiedData = () => {
      if (keywords) {
      const newData = data.details.filter((d) => {
        return keywords.every((key) => {
          return (
            d.user === key 
           );
        });
      });
      setfilteredData(newData);
    } else {
      setfilteredData(data);
    }
  };

  useEffect(() => {
    modifiedData();
  }, [keywords]);

  return (
    <>
    <div className="property">

      <h1>Properties Uploaded by [{UserProfile.getName()}]</h1>

      {filteredData.map((d) => {
        return <PersonalSingleProperty key={d.id} data={d} setkeywords={setKeywords} />;
      })}
    </div>
    <div className="form-pPropertyListing">
      {(deleteError !=="") ? (<div className="errorInLogIn">{deleteError}</div>): ""}
      <h1 className="delete-greet">Deleting Property</h1>
      <p className="delete-greet-sub">Delete your uploaded property by typing in the ID</p>
      <div className='form-pPropertyListing-inputs'>
          <label className='form-pPropertyListing-label'>Property ID</label>
          <input
            className='form-input-login'
            type='text'
            name='propertyid'
            placeholder='Enter your chosen Property ID'
            onChange={e => setDetails({...details, propertyID:e.target.value})}
            value={details.propertyID}
          />
      </div>
      
      <button className='form-pPropertyListing-btn' onClick={deleteProperty}>
          Confrim Delete
      </button>
      </div>


    </>
  );
};

export default PropertyList;

