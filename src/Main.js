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
        <div>
          <ul className="header">
            <li><NavLink to="/">Login</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink to="/reset">Reset</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/reset" component={Reset}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
