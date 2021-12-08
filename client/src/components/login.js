import React, { Component } from "react";
import './homepage.css'
import { GoogleLogin, GoogleLogout } from "react-google-login";
import GoogleLoginComponent from '../googlebutton.component'
 
const isNavBarHidden = true;

export default class Login extends Component {
  // This following section will display the table with the records of individuals.
  render() {
    return (
      <body>
        <head>
          <title>Hey'Hola</title>
        </head>
        <div class="title">
        <h1>Camp Span</h1>
        <GoogleLoginComponent />
        </div>
        <center> </center>

      </body>
    );
  }
}