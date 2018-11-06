import React from "react";
import ViewChange from "./ViewChange";
import Search from "./Search";
import TweetButton from "./TweetButton";

function Nav() {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  };

  const flexboxChild = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "10px",
    alignItems: "center"
  }

  return (
    <div style={containerStyle}>
      <div style={flexboxChild}>
        <div style={flexboxChild}>
          <ViewChange/>
        </div>
      </div>
      <div style={flexboxChild}>
        <div style={flexboxChild}>
          <Search/>
        </div>
        <div style={flexboxChild}>
          <TweetButton/>
        </div>
      </div>
    </div>
  );
}

export default Nav;
