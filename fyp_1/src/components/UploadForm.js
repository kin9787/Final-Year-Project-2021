import React, {useState} from 'react';
import './UploadForm.css';//css
import Footer  from './Footer';
import {uploadPersonalProperty,predictData} from '../api/api'

import UserProfile from './USERSESSION';

function UploadForm({}) {
  //details for sending to backend
  const [details,setDetails] = useState({title:"",price:"0",state:"",bedroom:"0", bathroom :"0",sqftLiving:"0", floors :"0", waterfront  :"0", sqftAbove :"0", sqftBasement:"0", yearBuilt :"0", yearRenovated:"0", zipcode :"0", lat :"0", long :"0", user:"", propertyID:"",view:"3", conditon:"3"});
  const [passwordError, setpasswordError] = useState("");
  const [result, setResult] = useState(0);
  const [floatResult, setfloatResult]  = useState(0);
  const [floatResultMax, setfloatResultMax]  = useState(0);

  const submitHandler = e => {
    e.preventDefault();
    if (details.title ==="" ||details.price ==="0" ||details.state ==="" || details.bedroom === "0" || details.bathroom === "0" || details.sqftLiving === "0" || details.floors === "0" || details.waterfront === "" || details.view === "" || details.conditon === "" || details.sqftAbove === "0" || details.sqftBasement === "" || details.yearBuilt === "0" || details.yearRenovated === "" || details.zipcode === "0" || details.lat === "0" || details.long === "0" || details.propertyID === "")
    {
      setpasswordError("Please fill in all forms");
      console.log("Please fill in all forms");
    }

    else{
        //api call
        uploadPersonalProperty(details)
              .then(res => console.log("Done Uploaded New Property...From Backend"))
              .catch(err => console.log(err))
          setpasswordError("Success! Uploaded new property");
          console.log("Uploaded New Property");       
        }        
  }

  //set cookie
  const setNewUserName = () =>{

    let user_name = UserProfile.getName()
        console.log(user_name)
        setDetails({...details, user:user_name})
        console.log(details.user)
  }

  const predictHousePrice = () =>{
    if (details.bedroom === "0" || details.bathroom === "0" || details.sqftLiving === "0" || details.floors === "0" || details.waterfront === "" || details.sqftAbove === "0" ||details.yearBuilt === "0" || details.yearRenovated === "" || details.zipcode === "0" || details.lat === "0" || details.long === "0" )
    {
      setpasswordError("Please fill in valid inputs");
      console.log("Please fill in valid inputs");
    }

    else{
      predictData(details)
      predictData(details)
        .then( res => {
          let resultgotten = res.result.slice(1,-1)
          console.log(resultgotten)
          if(resultgotten === "rror"){
            console.log("User wrong inputz")
            setpasswordError("Invalid input in forms");
          }
          else{
            setpasswordError("Success!");
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
    <>
    <div className='upload-form'>
      <form onSubmit={submitHandler} className='real-upload-property-form' noValidate>
      <h1 className="upload-property-greet">
        New Property Uploade Page
        </h1>
        <h1 className="upload-property-greet">
        Fill in the form below to upload your new property.
        </h1>
        <div className="upload-property-content-box">
        {(passwordError !=="") ? (<div className="errorInLogIn">{passwordError}</div>): ""}

        <div className='form-inputs-upload'>
          <label className='form-label'>Title</label>
          <input
            className='form-input'
            type='text'
            name='title'
            placeholder='Title'
            onChange={e => setDetails({...details, title:e.target.value})}
            value={details.title}
          />
        </div>
        
        <div className='form-inputs-upload'>
          <label className='form-label'>Price</label>
          <input
            className='form-input'
            type='text'
            name='price'
            placeholder='Price'
            onChange={e => setDetails({...details, price:e.target.value})}
            value={details.price}
          />
        </div>
        
        <div className='form-inputs-upload'>
          <label className='form-label'>State</label>
          <input
            className='form-input'
            type='text'
            name='state'
            placeholder='State'
            onChange={e => setDetails({...details, state:e.target.value})}
            value={details.state}
          />
        </div>

        <div className='form-inputs-upload'>
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

        <div className='form-inputs-upload'>
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

        <div className='form-inputs-upload'>
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

        <div className='form-inputs-upload'>
          <label className='form-label'>Number of Floors</label>
          <select className='form-input'  value={details.floors} onChange={e => setDetails({...details, floors:e.target.value})} >
            <option value="0">0</option>
            <option value="1.0">1.0</option>
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

        <div className='form-inputs-upload'>
          <label className='form-upload-property-label'>Waterfront</label>

          <select className='form-input'  value={details.waterfront} onChange={e => setDetails({...details, waterfront:e.target.value})} >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>

        <div className='form-inputs-upload'>
          <label className='form-upload-property-label'>Square Foot of House excluding basement </label>
          <input
            className='form-input'
            type='text'
            name='sqftAbove'
            placeholder='Enter your username'
            onChange={e => setDetails({...details, sqftAbove:e.target.value})}
            value={details.sqftAbove}
          />
        </div>

        <div className='form-inputs-upload'>
          <label className='form-upload-property-label'>Basement SquareFoot</label>
          <input
            className='form-input'
            type='text'
            name='sqftBasement'
            placeholder='Enter your username'
            onChange={e => setDetails({...details, sqftBasement:e.target.value})}
            value={details.sqftBasement}
          />
        </div>

        <div className='form-inputs-upload'>
          <label className='form-upload-property-label'>Year Built</label>
          <input
            className='form-input'
            type='text'
            name='yearBuilt'
            placeholder='Year Built'
            onChange={e => setDetails({...details, yearBuilt:e.target.value})}
            value={details.yearBuilt}
          />
        </div>

        <div className='form-inputs-upload'>
          <label className='form-upload-property-label'>Year Renovated</label>
          <input
            className='form-input'
            type='text'
            name='yearRenovated'
            placeholder='Year Renovated'
            onChange={e => setDetails({...details, yearRenovated:e.target.value})}
            value={details.yearRenovated}
          />
        </div>

        <div className='form-inputs-upload'>
          <label className='form-upload-property-label'>Zipcode</label>
          <input
            className='form-input'
            type='text'
            name='zipcode'
            placeholder='Enter Zipcode'
            onChange={e => setDetails({...details, zipcode:e.target.value})}
            value={details.zipcode}
          />
        </div>

        <div className='form-inputs-upload'>
          <label className='form-upload-property-label'>Latitude</label>
          <input
            className='form-input'
            type='text'
            name='lat'
            placeholder='Enter Latitude'
            onChange={e => setDetails({...details, lat:e.target.value})}
            value={details.lat}
          />
        </div>

        <div className='form-inputs-upload'>
          <label className='form-upload-property-label'>Longtitude</label>
          <input
            className='form-input'
            type='text'
            name='long'
            placeholder='Enter Longtitude'
            onChange={e => setDetails({...details, long:e.target.value})}
            value={details.long}
          />
        </div>

        <div className='form-inputs-upload'>
          <label className='form-upload-property-label'>PropertyID</label>
          <input
            className='form-input'
            type='text'
            name='propertyID'
            placeholder='Enter propertyID'
            onChange={e => setDetails({...details, propertyID:e.target.value})}
            value={details.propertyID}
          />
        </div>

        <button className='form-upload-property-btn' type='submit' onClick={setNewUserName}>
          Upload
        </button>

        </div>
        

      </form>
      <button className='form-upload-predict-btn' onClick={predictHousePrice}>
        Predict first?
       </button>
       {(passwordError !=="") ? (<div className="errorInLogIn">{passwordError}</div>): ""}
       {result ===0? null:<p class = "form-inputs-predict">Recommended House Price (+-RM10,000) : USD{result} </p>}
       {result ===0? null:<p  class = "form-inputs-predict"> Price Range: USD{floatResult} to USD{floatResultMax}</p>}
       </div>

    <Footer />
    </>
  );
};

export default UploadForm;