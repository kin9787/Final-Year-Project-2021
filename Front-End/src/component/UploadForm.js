import React, {useState} from 'react';
import './PredictionForm.css';//css
//UPLOAD PNG
import Footer  from './Footer';
import {uploadPersonalProperty} from '../api/api'

function UploadForm({Upload,error}) {

  const [details,setDetails] = useState({bedroom:"0", bathroom :"0",sqftLiving:"0", floors :"0", waterfront  :"0", view  :"0", conditon  :"0", sqftAbove :"0", sqftBasement:"0", yearBuilt :"0", yearRenovated:"0", zipcode :"0", lat :"0", long :"0"});
  const [passwordError, setpasswordError] = useState("");

    const submitHandler = e => {
      e.preventDefault();
      if (details.bedroom === "" || details.bathroom === "" || details.sqftLiving === "" || details.floors === "" || details.waterfront === "" || details.view === "" || details.conditon === "" || details.sqftAbove === "" || details.sqftBasement === "" || details.yearBuilt === "" || details.yearRenovated === "" || details.zipcode === "" || details.lat === "" || details.long === "")
      {
        setpasswordError("Please fill in all forms");
        console.log("Please fill in all forms");
      }

      else{
          uploadPersonalProperty(details)
                .then(res => console.log("Done Uploaded New Property...From Backend"))
                .catch(err => console.log(err))
           setpasswordError("Success! Uploaded new property");
           console.log("Uploaded New Property");       
          }        
    }

  return (
    <>
    <div className='predict-form'>
      <form onSubmit={submitHandler} className='real-predict-form' noValidate>
        <h1>
        Fill in the form below to upload your new property.
        </h1>
        {(passwordError !=="") ? (<div className="errorInLogIn">{passwordError}</div>): ""}
        {(error !=="") ? (<div className="errorInLogIn">{error}</div>): ""}
        <div className='form-inputs'>
          <label className='form-label'>Bedroom</label>
          <select className='form-input'  value={details.bedroom} onChange={e => setDetails({...details, bedroom:e.target.value})} >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Bathroom</label>
          <select className='form-input'  value={details.bathroom} onChange={e => setDetails({...details, bathroom:e.target.value})} >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className='form-inputs'>
          <label className='form-label'>SquareFoot of Living Room</label>
          <input
            className='form-input'
            type='text'
            name='sqftLiving'
            placeholder='SquareFoot of Living Room'
            onChange={e => setDetails({...details, sqftLiving:e.target.value})}
            value={details.sqftLiving}
          />
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Number of Floors</label>
          <select className='form-input'  value={details.floors} onChange={e => setDetails({...details, floors:e.target.value})} >
            <option value="0">0</option>
            <option value="1">1.0</option>
            <option value="2">1.5</option>
            <option value="1">2.0</option>
            <option value="3">2.5</option>
            <option value="1">3.0</option>
            <option value="4">3.5</option>
            <option value="1">4.0</option>
            <option value="5">4.5</option>
            <option value="1">5.0</option>
          </select>
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Waterfront</label>
          <input
            className='form-input'
            type='text'
            name='waterfront'
            placeholder='Number of waterfront'
            onChange={e => setDetails({...details, waterfront:e.target.value})}
            value={details.waterfront}
          />
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Rating of view</label>
          <input
            className='form-input'
            type='text'
            name='view'
            placeholder='View score'
            onChange={e => setDetails({...details, view:e.target.value})}
            value={details.view}
          />
        </div>

        <div className='form-inputs'>
          <label className='form-label'>House Condition</label>
          <select className='form-input'  value={details.conditon} onChange={e => setDetails({...details, conditon:e.target.value})} >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Square Foot of </label>
          <input
            className='form-input'
            type='text'
            name='sqftAbove'
            placeholder='Enter your username'
            onChange={e => setDetails({...details, sqftAbove:e.target.value})}
            value={details.sqftAbove}
          />
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Basement SquareFoot</label>
          <input
            className='form-input'
            type='text'
            name='sqftBasement'
            placeholder='Enter your username'
            onChange={e => setDetails({...details, sqftBasement:e.target.value})}
            value={details.sqftBasement}
          />
        </div>

        <div className='form-inputs'>
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

        <div className='form-inputs'>
          <label className='form-label'>Year Renovated</label>
          <input
            className='form-input'
            type='text'
            name='yearRenovated'
            placeholder='Year Renovated'
            onChange={e => setDetails({...details, yearRenovated:e.target.value})}
            value={details.yearRenovated}
          />
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Zipcode</label>
          <input
            className='form-input'
            type='text'
            name='zipcode'
            placeholder='Enter Zipcode'
            onChange={e => setDetails({...details, zipcode:e.target.value})}
            value={details.zipcode}
          />
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Latitude</label>
          <input
            className='form-input'
            type='text'
            name='lat'
            placeholder='Enter Latitude'
            onChange={e => setDetails({...details, lat:e.target.value})}
            value={details.lat}
          />
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Longtitude</label>
          <input
            className='form-input'
            type='text'
            name='long'
            placeholder='Enter Longtitude'
            onChange={e => setDetails({...details, long:e.target.value})}
            value={details.long}
          />
        </div>

        <button className='form-input-btn' type='submit'>
          Upload
        </button>

      </form>
    </div>
    <Footer />
    </>
  );
};

export default UploadForm;