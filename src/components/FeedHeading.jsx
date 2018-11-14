import React from "react";
import PropTypes from 'prop-types';
import Avatar from "./Avatar";
import UserName from './UserName';

function FeedHeading(props) {
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
      <div>
        <UserName />
      </div>
      <button onClick={props.onTweetFormDisplay}>Tweet Something?</button>
    </div>
  );
}
FeedHeading.propTypes = {
  onTweetFormDisplay: PropTypes.func
};
export default FeedHeading;
