import React from "react";
import PropTypes from "prop-types";

function Avatar(props) {
  const avatarImg = {
    border: "1px solid black",
    borderRadius: "10px/5px"
  };
  return (
    <img style={avatarImg} src={`https://via.placeholder.com/${props.size}`}/>
  );
}

Avatar.propTypes = {
  size: PropTypes.string.isRequired
}

export default Avatar;
