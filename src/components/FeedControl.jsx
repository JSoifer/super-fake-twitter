import React from 'react';
import PropTypes from "prop-types";
import FeedHeading from './FeedHeading';
import Feed from './Feed';
import TweetForm from './TweetForm';
import { Switch, Route } from 'react-router-dom';


class FeedControl extends React.Component {
  constructor(props) {
  super(props);
      this.state = {
        formVisibleOnPage: false
      };
      this.handleTweetFormDisplay = this.handleTweetFormDisplay.bind(this);
  }

  handleTweetFormDisplay(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <TweetForm onNewTweetCreation={this.props.onNewTweetCreation}/>;
    } else {
      currentlyVisibleContent = <FeedHeading onTweetFormDisplay={this.handleTweetFormDisplay} />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );

  }
}
  FeedControl.propTypes = {
    onNewTweetCreation: PropTypes.func
};

export default FeedControl;
