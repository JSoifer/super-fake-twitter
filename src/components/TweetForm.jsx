import React from "react";
import PropTypes from 'prop-types';
import Avatar from "./Avatar";

function TweetForm(props) {
  let _post = null;

  function handleTweetFormSubmit(event) {
    event.preventDefault();
    props.onNewTweetCreation({post: _post.value});
    _post.value = '';
  }
  const tweetFormStyles = {
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
    <div style={tweetFormStyles}>
      <div>
        <Avatar
          size="40x40"
        />
      </div>
      <form onSubmit={handleTweetFormSubmit}>
        <textarea style={inputStyle} type="text" id='post' placeholder="What's happening" ref={(textarea) => {_post = textarea;}} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
TweetForm.propTypes = {
  onNewTweetCreation: PropTypes.func
};
export default TweetForm;
