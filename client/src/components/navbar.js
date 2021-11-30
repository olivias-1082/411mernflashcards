import "bootstrap/dist/css/bootstrap.css";
 import './navbar.css';
 import {useHistory, Link} from 'react-router'
 import {useEffect, useState} from 'react'
 import { GoogleLogin, GoogleLogout, useGoogleLogin } from "react-google-login";
 import GoogleLoginComponent from '../googlebutton.component'
 import { withRouter } from 'react-router'

function Navbar (props) {

  const isLoggedIn = GoogleLoginComponent;

  if (props.location.pathname === "/login") {
      return false;
  }

  return (
    <body>
      <header>
        <div class="container">
        <nav>
          <ul>
            
            <li><a href="/">Home</a></li>
            <li><a href="/flashcards">Flashcards</a></li>
            <li><a href="/quiz">Quiz</a></li>
            <li><a href="/usertranslations">All Translations</a></li>
            <li><a href="/create">Add Translation</a></li> 
            <li><a href="/login"><GoogleLoginComponent /></a></li>
            
          </ul>
        </nav>
        </div>
      </header>
    </body>
    
  );
};
 
export default withRouter(Navbar);