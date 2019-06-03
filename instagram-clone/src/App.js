import React from "react";
import dummyData from "./dummy-data";
import Searchbar from "./components/Searchbar/Searchbar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.scss";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
        <PostContainer data={dummyData} />
      </div>
    );
  }
}
