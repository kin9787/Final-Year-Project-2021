import React from "react";
import './PropertyHead.css';
//import close from "./img/images/icon-remove.svg";

const Header = ({ keywords, removeKeywords, clearAll }) => {
  return (
    <div className="header-container">
      <ul>
        {keywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <button className="close" onClick={() => removeKeywords(key)}>
               
              </button>
            </li>
          );
        })}
        <a href="#" onClick={() => clearAll()}>
          Clear
        </a>
      </ul>
    </div>
  );
};

export default Header;

// <img src={close} alt="" />