import React from "react";
import Nav from "./Nav";
import Bio from "./Bio";
import Suggestions from "./Suggestions";
import Profile from "./Profile";
import FeedContainer from './FeedContainer';

function HomeView(){

  const homeViewContainerStyles = {
    display: "flex",
    flexDirection: "column",
  };

  const subPanel = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    border: "1px dotted lightgrey"
  };

  const column = {
    border: "1px dashed green"
  }

  const profile = {
    width: "28vw",
    height: "25vh",
    border: "1px solid gray",
  };

  const feed = {
    width: ""
  };

  return (
    <div className="homeview-contaner" style={homeViewContainerStyles}>
      <div className="nav" style={subPanel}>
        <Nav/>
      </div>
      <div className="subNav" style={subPanel}>
        <div style={column}>
          <div id="profile" style={profile}>
            <Profile/>
          </div>
          <div id="bio" style={profile}>
            <Bio/>
          </div>
        </div>
        <div id="feed" style={column}>
          <FeedContainer/>
        </div>
        <div style={column}>
          <Suggestions/>
        </div>
      </div>
      
    </div>
  );
};

export default HomeView;
