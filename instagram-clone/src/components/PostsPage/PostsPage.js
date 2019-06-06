import React from "react";
import dummyData from "../../dummy-data";
import Searchbar from "../Searchbar/Searchbar";
import PostContainer from "../PostContainer/PostContainer";
import "./PostsPage.scss";

export default class PostsPage extends React.Component {
  state = {
    searchQuery: ''
  }

  updateSearchQuery = async event => {
    await this.setState({searchQuery: event.target.value})
  }

  render() {
    return (
      <div className="posts-page">
        <Searchbar updateQuery={this.updateSearchQuery} />
        <PostContainer username={this.props.get()} searchQuery={this.state.searchQuery} data={dummyData} />
      </div>
    );
  }
}
