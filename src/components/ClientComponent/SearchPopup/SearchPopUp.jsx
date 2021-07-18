import React from "react";

function SearchPopUp() {
  return (
    <div>
      <div className="search-box">
        <input type="text" placeholder="Type to search.." />
        <div className="search-icon">
          <i className="fas fa-search" />
        </div>
        <div className="cancel-icon">
          <i className="fas fa-times" />
        </div>
        <div className="search-data"></div>
      </div>
    </div>
  );
}

export default SearchPopUp;
