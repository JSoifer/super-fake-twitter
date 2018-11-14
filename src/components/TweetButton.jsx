import React from "react";

function TweetButton() {

  const tweetButtonStyle = {
    // width: "100%",
    // height: "30px",
    // borderRadius: "20px/25px",
    // border: "2px solid cyan",
    // padding: "5px",
    // fontSize: "1.2rem"
  }
  const button = {
    border: "none",
    fontSize: "1.2rem",
    width: "100%",
    height: "40px",
    borderRadius: "20px/25px",
    border: "2px solid cyan",
    padding: "10px",
    fontSize: "1.2rem"
  }
  return (
    <div style={tweetButtonStyle}>
      <button style={button}>Tweet</button>
    </div>
  );
}

export default TweetButton;
