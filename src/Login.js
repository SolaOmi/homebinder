import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <form className="login text-center">
        <input className="text-input" type="email" name="email" placeholder="Email" required/>
        <input className="text-input"
               type="password"
               name="password"
               placeholder="Password"
               minlength="8"
               required />
        <input className="submit" type="submit" value="Login" />
      </form>
    );
  }
}

export default Login;
