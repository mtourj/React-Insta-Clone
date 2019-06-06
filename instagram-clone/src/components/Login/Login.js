import React, { Component } from "react";
import "./Login.scss";

export default class Login extends Component {

  state = {
    usernameValue: ''
  }

  login = () => {
    this.props.set(this.state.usernameValue);
  }

  updateUsernameInput = async event => {
    await this.setState({usernameValue: event.target.value});
  }

  render() {
    return (
      <div className="login">
        <div className="window">
          <h1 className="heading">Instagram</h1>
          <form onSubmit={this.login} className="login-form">
            <div className="field">
              <div className="layer1">
                <div className="layer2">
                  <label>Phone number, username, or email</label>
                  <input value={this.state.usernameValue} onChange={this.updateUsernameInput} maxLength='75' name='username' autocorrect='off' aria-label='Phone number, username, or email' />
                </div>
              </div>
            </div>
            <div className="field">
              <div className="layer1">
                <div className="layer2">
                  <label>Password</label>
                  <input maxLength='75' name='password' autocorrect='off' aria-label='Password' type='password' />
                </div>
              </div>
            </div>
            <div className='action'>
              <button action='submit' onClick={this.login} className='button'>
                <div className='content'>
                  Log In
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
