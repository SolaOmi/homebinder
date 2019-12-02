import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Login from "./Login";
import Reset from "./Reset";
import Signup from "./Signup";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <main>
          <h1 className="text-center">Log In</h1>
          <div className="content">
            <Route exact path="/" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/reset" component={Reset}/>
          </div>
          <ul className="footer">
            <li>New to HomeBinder? <NavLink to="">Sign Up</NavLink></li>
            <li>Forgot Password?<NavLink to="">Reset</NavLink></li>
          </ul>
        </main>
      </HashRouter>
    );
  }
}

export default Main;
