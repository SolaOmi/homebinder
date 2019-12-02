import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <form className="login text-center">
        <input className="text-input" type="text" name="email" placeholder="Email"/>
        <input className="text-input" type="text" name="password" placeholder="Password"/>
        <input className="submit" type="submit" value="Login" />
      </form>
    );
  }
}

export default Login;
