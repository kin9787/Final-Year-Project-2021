import React, {useState} from 'react';
import './PredictionForm.css';//css

import {predictData} from '../api/api'

function PredictionForm({Predict,error}) {

  const [details,setDetails] = useState({bedroom:"0", bathroom :"0",sqftLiving:"0", floors :"0", waterfront  :"0", view  :"0", conditon  :"0", sqftAbove :"0", sqftBasement:"0", yearBuilt :"0", yearRenovated:"0", zipcode :"0", lat :"0", long :"0"});
  const [passwordError, setpasswordError] = useState("");
  const [result, setResult] = useState(0);
  const [floatResult, setfloatResult]  = useState(0);
  const [floatResultMax, setfloatResultMax]  = useState(0);
  
 

    const submitHandler = e => {
      e.preventDefault();
      
      if (details.bedroom === "0" || details.bathroom === "0" || details.sqftLiving === "" || details.floors === "0" || details.waterfront === "" || details.view === "" || details.conditon === "" || details.sqftAbove === "" || details.sqftBasement === "" || details.yearBuilt === "" || details.yearRenovated === "" || details.zipcode === "" || details.lat === "" || details.long === "")
      {
        setpasswordError("Please fill in all forms");
        console.log("Please fill in all forms");
      }

      else{
        
          console.log("Prediction Form Filled");
          //Send details to SignUpData.js for verification
          Predict(details);
          setpasswordError("Success! Scroll down to view your result");
          predictData(details)
              .then( res => {
                let resultgotten = res.result.slice(1,-1)
                console.log( res.result.includes("error"))
                if(res.result.includes("error")){
                  console.log("User wrong input")
                  setpasswordError("Invalid input in forms");
                }
                else{
                setResult(parseFloat(resultgotten))
                setfloatResult(parseFloat(resultgotten)- 10000)
                setfloatResultMax(parseFloat(resultgotten) + 10000)
                }
              }
                )
              .catch(function(err ){ console.log(err)
              setpasswordError("Error wrong inputs!")}
              )
           console.log("Prediction Submitted");
           
        
      }     
    
  }

  return (
    
    <div className='predict-form'>
      <form onSubmit={submitHandler} className='real-predict-form' noValidate>
        <h1>
          Use our intelligent predictor to get the best price point for the house you desired. 
        </h1>
        <h1>
        Fill in the form below to get the prediction.
        </h1>
        <div className="predict-content-box">
        {(passwordError !=="") ? (<div className="errorInLogIn">{passwordError}</div>): ""}
        {(error !=="") ? (<div className="errorInLogIn">{error}</div>): ""}
        <div className='form-inputs-predict'>
          <label className='form-label'><i className='fas fa-bed' /> Bedroom </label>
          <select className='form-input'  value={details.bedroom} onChange={e => setDetails({...details, bedroom:e.target.value})} >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className='form-inputs-predict'>
          <label className='form-label'><i className='fas fa-bath' /> Bathroom</label>
          <select className='form-input'  value={details.bathroom} onChange={e => setDetails({...details, bathroom:e.target.value})} >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className='form-inputs-predict'>
          <label className='form-label'><i className='fas fa-couch' /> SquareFoot of Home</label>
          <input
            className='form-input'
            type='text'
            name='sqftLiving'
            placeholder='SquareFoot of Living Room'
            onChange={e => setDetails({...details, sqftLiving:e.target.value})}
            value={details.sqftLiving}
          />
        </div>

        <div className='form-inputs-predict'>
          <label className='form-label'><i className='fas fa-layer-group' /> Number of Floors</label>
          <select className='form-input'  value={details.floors} onChange={e => setDetails({...details, floors:e.target.value})} >
            <option value="0">0</option>
            <option value="1">1.0</option>
            <option value="1.5">1.5</option>
            <option value="2.0">2.0</option>
            <option value="2.5">2.5</option>
            <option value="3.0">3.0</option>
            <option value="3.5">3.5</option>
            <option value="4.0">4.0</option>
            <option value="4.5">4.5</option>
            <option value="5.0">5.0</option>
          </select>
        </div>

        <div className='form-inputs-predict'>
          <label className='form-label'><i className='fas fa-tint' /> Waterfront</label>

          <select className='form-input'  value={details.waterfront} onChange={e => setDetails({...details, waterfront:e.target.value})} >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>

        <div className='form-inputs-predict'>
          <label className='form-label'><i className='far fa-star' />Rating of view (1 - 5)</label>
          <select className='form-input'  value={details.view} onChange={e => setDetails({...details, view:e.target.value})} >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className='form-inputs-predict'>
          <label className='form-label'><i className='fas fa-house-damage' />House Condition(1 -5)</label>
          <select className='form-input'  value={details.conditon} onChange={e => setDetails({...details, conditon:e.target.value})} >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className='form-inputs-predict'>
          <label className='form-label'><i className='fas fa-warehous' />Square Foot of House excluding basement</label>
          <input
            className='form-input'
            type='text'
            name='sqftAbove'
            placeholder='Enter your username'
            onChange={e => setDetails({...details, sqftAbove:e.target.value})}
            value={details.sqftAbove}
          />
        </div>

        <div className='form-inputs-predict'>
          <label className='form-label'>Basement SquareFoot (Leave 0 if none)</label>
          <input
            className='form-input'
            type='text'
            name='sqftBasement'
            placeholder='Enter your username'
            onChange={e => setDetails({...details, sqftBasement:e.target.value})}
            value={details.sqftBasement}
          />
        </div>

        <div className='form-inputs-predict'>
          <label className='form-label'>Year Built</label>
          <input
            className='form-input'
            type='text'
            name='yearBuilt'
            placeholder='Year Built'
            onChange={e => setDetails({...details, yearBuilt:e.target.value})}
            value={details.yearBuilt}
          />
        </div>

        <div className='form-inputs-predict'>
          <label className='form-label'>Year Renovated (Leave 0 if none)</label>
          <input
            className='form-input'
            type='text'
            name='yearRenovated'
            placeholder='Year Renovated'
            onChange={e => setDetails({...details, yearRenovated:e.target.value})}
            value={details.yearRenovated}
          />
        </div>

        <div className='form-inputs-predict'>
          <label className='form-label'>  <i class="fas fa-map-marker-alt"/> Zipcode</label>
          <input
            className='form-input'
            type='text'
            name='zipcode'
            placeholder='Enter Zipcode'
            onChange={e => setDetails({...details, zipcode:e.target.value})}
            value={details.zipcode}
          />
        </div>

        <div className='form-inputs-predict'>
          <label className='form-label'>  <i class="fas fa-map-marker-alt"/> Latitude (Only )</label>
          <input
            className='form-input'
            type='text'
            name='lat'
            placeholder='Enter Latitude'
            onChange={e => setDetails({...details, lat:e.target.value})}
            value={details.lat}
          />
        </div>

        <div className='form-inputs-predict'>
          <label className='form-label'> <i class="fas fa-map-marker-alt"/> Longtitude</label>
          <input
            className='form-input'
            type='text'
            name='long'
            placeholder='Enter Longtitude'
            onChange={e => setDetails({...details, long:e.target.value})}
            value={details.long}
          />
        </div>

        <button className='form-predict-btn' type='submit'>
          Predict
        </button>


        {result ===0? null:<p class = "form-inputs-predict">Recommended House Price (+-RM10,000) : USD{result} </p>}
        {result ===0? null:<p  class = "form-inputs-predict"> Price Range: USD{floatResult} to USD{floatResultMax}</p>}
        </div>
      </form>
    </div>
  );
};

export default PredictionForm;