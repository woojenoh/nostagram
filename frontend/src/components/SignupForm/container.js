import React, { Component } from "react";
import SignupForm from "./presenter";

class Container extends Component {
  state = {
    email: "",
    name: "",
    username: "",
    password: ""
  };

  render() {
    const { email, name, username, password } = this.state;
    return (
      <SignupForm
        emailValue={email}
        nameValue={name}
        usernameValue={username}
        passwordValue={password}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
      />
    );
  }

  _handleInputChange = event => {
    const {
      target: { value, name }
    } = event;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = event => {
    event.preventDefault();
    // redux action
  };

  _handleFacebookLogin = response => {
    console.log(response);
    // redux action
  };
}

export default Container;
