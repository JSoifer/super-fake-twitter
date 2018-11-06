import React from "react";
import Avatar from "./Avatar";

function FeedHeading() {
  const feedHeadingStyles = {
    display: "flex",
    width: "38vw",
    height: "8vh",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "lightblue"
  };
  const inputStyle = {
    width: "25vw",
    height: "3vh"
  }

  return (
    <div style={feedHeadingStyles}>
      <div>
        <Avatar
          size="40x40"
        />
      </div>
      <input style={inputStyle} type="text" placeholder="What's happening"></input>
    </div>
  );
}

export default FeedHeading;
