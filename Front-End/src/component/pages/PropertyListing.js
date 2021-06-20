import React, {useState, useEffect} from 'react';
import '../../App.css';
import PropertyList from '../PropertyList';
import Footer from '../Footer';
import data from '../../data.json';//DATA HERE
import Header from '../PropertyHead'

import {extractAllProperty} from '../../api/api'

function PropertyListing() {
  const [filterKeywords, setfilterKeywords] = useState([]);

  // const setSearchKeyword = (data) => {
  //   setfilterKeywords(data);
  // };

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setfilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setfilterKeywords([]);
  };

  useEffect(() => {
    extractAllProperty()
      .then(
        function (res) {
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




