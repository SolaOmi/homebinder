import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <form>
        <input type="text" name="email" placeholder="Email Address"/>
        <input type="text" name="password" placeholder="Password"/>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default Login;
