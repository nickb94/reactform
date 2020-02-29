import React from 'react';
import Username from "./components/Username/Username";
import Email from "./components/Email/Email";
import Password from "./components/Password/Password";
import Mobile from "./components/Mobile/Mobile";
import { Mycontext } from "./components/Context/Context"
import "./App.css";

//form submission logic
const formValid = finalObj => {
  let valid = true;
  finalObj.forEach(val => {
    val === "" ? valid = false : valid = true
  });
  return valid
}


const App = () => {

  const { uvalue, pvalue, evalue, cpvalue, nvalue } = React.useContext(Mycontext);
  const [usernameContext,] = uvalue;
  const [emailContext,] = evalue;
  const [passContext,] = pvalue;
  const [conContext,] = cpvalue;
  const [numberContext] = nvalue;

  const finalObj = [

    usernameContext,
    emailContext,
    passContext,
    conContext
  ]

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(finalObj)) {

      console.log("-----Submit-----")
      console.log("Username :" + usernameContext)
      console.log("Email :" + emailContext)
      console.log("Pass: " + passContext)
      console.log("Confirm Pass: " + conContext)
      console.log("Mobile: "+ numberContext) 
    } else {
      alert("Please fill complete form.");
    }
  }

  return (
    <>
      <div className="screen">
        <div className="leftscreen">
        </div>
        <div className="rightscreen">
          <h1>Create a Nick Account</h1>
          <form onSubmit={handleSubmit}>
            <Email />
            <span id="emailerror"></span>
            <Username />
            <span id="usernameerror"></span>
            <Password />
            <Mobile />
            <span id="numbererror"></span>
            <button type="submit">Create your Nick Account</button>
          </form>
          <p><a target="__blank" rel="noopener noreferrer" href="https://github.com/nickb94">@nickb94</a></p>
        </div>

      </div>

    </>
  );
}

export default App;
