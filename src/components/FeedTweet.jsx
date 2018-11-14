import React from "react";
import PropTypes from 'prop-types';

function FeedTweet(props) {
  return (
    <div>
      <p>{props.post}</p>
      <hr/>
    </div>
  );
}

FeedTweet.propTypes = {
  post: PropTypes.string.isRequired
};

export default FeedTweet;
