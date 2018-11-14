import React from "react";
import FeedTweet from "./FeedTweet";
import PropTypes from 'prop-types';



function Feed(props) {
  return (
      <div>
        {props.feed.map((feedTweet, index) =>
          <FeedTweet post={feedTweet.post}
            key={index}/>
        )}
      </div>
  );
}

Feed.propTypes = {
  feed: PropTypes.array
};

export default Feed;
