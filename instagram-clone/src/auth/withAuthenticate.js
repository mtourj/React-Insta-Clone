import React from "react";

const withAuthenticate = Component => Login =>
  class extends React.Component {
    getUsername = () => {
      if (localStorage.getItem("username")) {
        return localStorage.getItem("username");
      }
    };

    setUsername = name => {
      if (name.trim().length > 0) {
        localStorage.setItem("username", name);
        this.setState({ username: name });
      }
    };

    state = {
      username: this.getUsername()
    };

    render() {
      return this.state.username ? (
        <Component get={this.getUsername} />
      ) : (
        <Login set={this.setUsername} />
      );
    }
  };

export default withAuthenticate;
