import React from "react";

function Search() {
  const searchContainer = {
    height: "100%"
  }

  const searchStyle = {
    width: "100%",
    height: "30px",
    borderRadius: "20px/25px",
    border: "2px solid cyan",
    padding: "5px",
    fontSize: "1.2rem"
  }

  return (
    <div style={searchContainer}>
      <input type="text" style={searchStyle} placeholder="Search"></input>
    </div>
  );
}

export default Search;
