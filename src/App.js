import React from 'react';
import Username from "./components/Username/Username"
import Email from "./components/Email/Email"
import Password from "./components/Password/Password"
import Mobile from "./components/Mobile/Mobile"
import { Link } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css";

const App = () => {

  return (
    <>
      <div className="screen">
        <div className="leftscreen">
          <h1>Sign Up</h1>
        </div>
        <div className="rightscreen">
          <h1>Create a Nick Account</h1>
          <form>
            <Email />
            <span id="emailerror"></span>
            <Username />
            <span id="usernameerror"></span>
            <Password />
            <Mobile />
            <span id="numbererror"></span>
            <Router>
              <Link to="#">
                <button>Create your Nick Account</button>
              </Link>
            </Router>
          </form>
        </div>
      </div>
      <p><a href="https://github.com/nickb94">@nickb94</a></p>
    </>
  );
}

export default App;
