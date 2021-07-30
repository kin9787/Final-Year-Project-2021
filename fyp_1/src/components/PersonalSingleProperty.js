import React, { useEffect, useState } from "react";
import './SingleProperty.css';//css

import { Link } from 'react-router-dom'; //connector

import PropertyTAG from './PROPERTYTAG.js'; 

const PersonalSingleProperty = (props) => {


  const {
    title,
    bathroom,
    featured,
    floor,
    logo,
    price,
    bedroom,
    user,
    propertyID
  } = props.data;
  
  //Filter keywords
  let keywords = [user];

  const [icon, setIcon] = useState("");

  const importSvgs = () => {
    const logoSvg = import(`${logo}`).then((d) => {
      console.log(d.default)
      setIcon(d.default);
    });
  }; 

  const showstuff = () => {
    PropertyTAG.setProperty(propertyID)
  }


  useEffect(() => {
    importSvgs();
  }, [logo
  ]);

  return (
    <>
    <div
      className={
        featured ? "job-container job-container--borderLeft" : "job-container"
      }
    >
      <div className="logo-official">
        <img src={icon} width = "125" height = "125" alt="X" />
      </div>
      <div className="part1">
        <div className="company">
          <span className="cname">RM{price}</span>
          {props.data.new && <span className="new">new!</span>}
          {props.data.featured && <span className="featured">featured</span>}
        </div>

        <Link to='/property-details' className="position" onClick={showstuff}>{title}</Link>
        
        <div className="details">
          <span>{bedroom}</span>
          <i className='fas fa-bed' />
          <span>&nbsp;•&nbsp;</span>
          <span>{bathroom}</span>
          <i className='fas fa-bath' />
          <span>&nbsp;•&nbsp;</span>
          <span>{floor}</span>
          <i className='fas fa-layer-group' />
          <span>&nbsp;•&nbsp;</span>
          <span>{propertyID}</span>
        </div>
      </div>


      <div className="part2">
        {keywords.map((key, id) => (
          <span onClick={() => props.setkeywords(key)} key={id}>
            {key}
          </span>
        ))}
      </div>
    
    </div>

    </>
  );
};

export default PersonalSingleProperty;