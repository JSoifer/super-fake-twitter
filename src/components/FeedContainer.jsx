import React from "react";
import FeedControl from './FeedControl';
import { Switch, Route } from 'react-router-dom';
import Feed from './Feed';

class FeedContainer extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      masterTweetList: []
    };
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
  }

  handleAddingNewTweetToList(newTweet){
    let newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.push(newTweet);
    this.setState({masterTweetList: newMasterTweetList});
  }


render(){
  return (
    <div>
      <FeedControl onNewTweetCreation={this.handleAddingNewTweetToList} />
      <Feed feed={this.state.masterTweetList}/>
    </div>
    );
  }
};

export default FeedContainer;
