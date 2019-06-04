import React from "react";
import dummyData from "./dummy-data";
import Searchbar from "./components/Searchbar/Searchbar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.scss";

export default class App extends React.Component {
  // im not about to use a lifecycle method just to use it.
  // used em before, i swear.

  state = {
    searchQuery: ''
  }

  updateSearchQuery = async event => {
    await this.setState({searchQuery: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <Searchbar updateQuery={this.updateSearchQuery}/>
        <PostContainer searchQuery={this.state.searchQuery} data={dummyData} />
      </div>
    );
  }
}
