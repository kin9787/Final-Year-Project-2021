import React, {useState, useEffect} from 'react';
import '../../App.css';
import PropertyList from '../PropertyList';
import Footer from '../Footer';
import data from '../../propertyData.json';//DATA HERE
import Header from '../PropertyHead'
import Navbar from '../Navbar';//components

import {extractAllProperty} from '../../api/api'


function PropertyListing() {
  const [filterKeywords, setfilterKeywords] = useState([]);

  //filter function
  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };

  //delete filter word
  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setfilterKeywords(newKeywords);
  };

  //clear all filter word
  const clearAll = () => {
    setfilterKeywords([]);
  };

  //startup trigger
  useEffect(async() => {
    extractAllProperty()
      .then(
        await function (res) {
          console.log(res)
          
        }
      )
      .catch(
        err => console.log(err),
        console.log("At Property Listing,Something went wrong")
      )
  }, []);

  return (
    <>
    <Navbar />
    <div>
      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={clearAll}
        />
      )}
      <PropertyList
        keywords={filterKeywords}
        data={data}
        setKeywords={addFilterKeywords}
      />
    </div>
    <Footer />
    </>
  );
}

export default PropertyListing;




