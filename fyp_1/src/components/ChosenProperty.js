import React, {useState, useEffect} from 'react';
import './ChosenProperty.css';//css

//property cookie
import PropertyTAG from './PROPERTYTAG'; 


//api
import {extractSpeificProperty, extractPersonalData} from '../api/api'

function ChosenProperty() {

  const [selleremail, setSelleremail] = useState({email:""})
  const [waterfront, setWaterfront] = useState({waterfrontz:""})
  const [details,setDetails] = useState({title:"",price:"0",state:"",bedroom:"0", bathroom :"0",sqftLiving:"0", floors :"0", sqftAbove :"0", sqftBasement:"0", yearBuilt :"0", yearRenovated:"0", zipcode :"0", lat :"0", long :"0", user:"", propertyID:""});

  //rerender function
  useEffect(async() => {
    let dataUser = {user:PropertyTAG.getProperty()}
    //api call
    extractSpeificProperty(dataUser)
      .then(
        await function (res) {
          console.log("ëre",res)
          setDetails({title:res.serverRes.details[0].title,price:res.serverRes.details[0].price,state:res.serverRes.details[0].state,bedroom:res.serverRes.details[0].bedroom, bathroom :res.serverRes.details[0].bathroom,sqftLiving:res.serverRes.details[0].sqftLiving, floors :res.serverRes.details[0].floor,  sqftAbove :res.serverRes.details[0].sqftAbove, sqftBasement:res.serverRes.details[0].sqftBasement, yearBuilt :res.serverRes.details[0].yearBuilt, yearRenovated:res.serverRes.details[0].yearRenovated, zipcode :res.serverRes.details[0].zipcode, lat :res.serverRes.details[0].latitude, long :res.serverRes.details[0].longtitude, user:res.serverRes.details[0].user, propertyID:res.serverRes.details[0].propertyID  })
          if (res.serverRes.details[0].waterfront === "1"){
            setWaterfront({waterfrontz:"Yes"})
          }
          else{
            setWaterfront({waterfrontz:"No"})
          }
          let emailID = {user:res.serverRes.details[0].user}
          extractPersonalData(emailID)
          .then(
            function(res){
            console.log(res);
            setSelleremail({email:res.serverRes.details[0].email})
          }
          )
        }
      )
      .catch(
        err => console.log(err)
      )

    

  }, []);

  return (
    
    <div className='chosen-property-details-form'>
      <form className='real-property-details-form' noValidate>
        <h1>
        Property Details
        </h1>
        <div className="content-box-property-details">
        {details.title ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'><i class="fas fa-sign"/> Title</label>
          <label className='form-property-details-input'>{details.title} </label>
        </div>
        }

        {details.price ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'><i class="far fa-money-bill-alt"/> Price</label>
          <label className='form-property-details-input'>{details.price} </label>
        </div>
        }   

        {details.state ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'><i class="fas fa-flag-usa"/> State</label>
          <label className='form-property-details-input'>{details.state} </label>
        </div>
        }   

        {details.bedroom ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'><i className='fas fa-bed' /> Bedroom</label>
          <label className='form-property-details-input'>{details.bedroom} </label>
        </div>
        }

        {details.bathroom ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'><i className='fas fa-bath' /> Bathroom</label>
          <label className='form-property-details-input'>{details.bathroom} </label>
        </div>
        }   

        {details.sqftLiving ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'><i className='fas fa-couch' /> Living SquareFoot</label>
          <label className='form-property-details-input'>{details.sqftLiving} </label>
        </div>
        } 

        {details.floors ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'><i className='fas fa-layer-group' /> Floors</label>
          <label className='form-property-details-input'>{details.floors} </label>
        </div>
        }

        {waterfront.waterfrontz ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'><i className='fas fa-tint' /> Waterfront</label>
          <label className='form-property-details-input'>{waterfront.waterfrontz} </label>
        </div>
        }   

        {details.sqftAbove ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'><i className='fas fa-warehous' />SquareFoor excluding basement</label>
          <label className='form-property-details-input'>{details.sqftAbove} </label>
        </div>
        } 

        {details.sqftBasement ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'>Basement SquareFoot</label>
          <label className='form-property-details-input'>{details.sqftBasement} </label>
        </div>
        }

        {details.yearBuilt ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'>Year Built</label>
          <label className='form-property-details-input'>{details.yearBuilt} </label>
        </div>
        }   

        {details.yearRenovated ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'><i class="fas fa-history"/> Year Renovated</label>
          <label className='form-property-details-input'>{details.yearRenovated} </label>
        </div>
        } 

        {details.zipcode ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'>Zipcode</label>
          <label className='form-property-details-input'>{details.zipcode} </label>
        </div>
        }

        {details.lat ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'><i class="fas fa-map-marker-alt"/> Latitude</label>
          <label className='form-property-details-input'>{details.lat} </label>
        </div>
        }   

        {details.long ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'><i class="fas fa-map-marker-alt"/> Longtitude</label>
          <label className='form-property-details-input'>{details.long} </label>
        </div>
        } 

        {details.user ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'><i class="far fa-user"/> User Listed</label>
          <label className='form-property-details-input'>{details.user} </label>
        </div>
        }

        {details.propertyID ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'><i class="far fa-id-card"/> Property ID</label>
          <label className='form-property-details-input'>{details.propertyID} </label>
        </div>
        }   

        {selleremail.email ===""? null:
        <div className='form-inputs-property-details'>
          <label className='form-property-details-label'><i class="far fa-envelope"/> Seller Email</label>
          <label className='form-property-details-input'>{selleremail.email} </label>
        </div>
        } 

        </div>

      </form>
    </div>
  );
};

export default ChosenProperty;