//import libraries
import React, {useState, useEffect} from 'react';
import '../../App.css';
import PersonalPropertyListing from '../PersonalPropertyListing';
import Footer from '../Footer';
import data from '../../personalPropertyData.json';//DATA HERE
import Header from '../PropertyHead'
import Navbar from '../Navbar';//components

//api
import {ExtractpersonalProperty} from '../../api/api'

//cookie
import UserProfile from '../USERSESSION';  

function CheckUploaded() {
  const [filterKeywords, setfilterKeywords] = useState([]);

  //filter function
  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };

  //remove filter
  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setfilterKeywords(newKeywords);
  };

  //clear all filter
  const clearAll = () => {
    setfilterKeywords([]);
  };

  //startup trigger
  useEffect(async() => {
    let USER_id = {user:UserProfile.getName()}
    ExtractpersonalProperty(USER_id)
      .then(
        await function (res) {
          console.log(res)
        }
      )
      .catch(
        err => console.log(err),
      )
  }, []);

  return (
    <>
    <Navbar />
    <div>
      <div className="header"></div>

      {/* <Search setSearchKeyword={setSearchKeyword} /> */}

      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={clearAll}
        />
      )}

      <PersonalPropertyListing
        keywords={filterKeywords}
        data={data}
        setKeywords={addFilterKeywords}
      />
    </div>
    <Footer />
    </>
  );
}

export default CheckUploaded;




