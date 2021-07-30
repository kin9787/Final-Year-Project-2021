import React, { useEffect, useState } from "react";
import SingleProperty from "./SingleProperty";
import "./PropertyList.css"

const PropertyList = ({ data, setKeywords, keywords }) => {
  console.log(data);
  const [filteredData, setfilteredData] = useState([]);

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
    // SearchFunc();
  }, [keywords]);

  return (
    <>
    <div className="property">
      <h1 className="property-greet">Property Listing</h1>
      {filteredData.map((d) => {
        return <SingleProperty key={d.id} data={d} setkeywords={setKeywords} />;
      })}
    </div>
    </>
  );
};

export default PropertyList;

