import React from "react";
import FeedHeading from "./FeedHeading";
import FeedTweet from "./FeedTweet";


function Feed() {
  return (
    <div>
      <div>
        <FeedHeading/>
      </div>
      <div>
        <FeedTweet/>
      </div>
    </div>
  );
}

export default Feed;
