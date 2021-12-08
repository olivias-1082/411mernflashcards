import "bootstrap/dist/css/bootstrap.css";
import './navbar.css';
import React, { useContext } from 'react';

import { AuthContext } from './context/auth-context'
import { useHistory } from 'react-router-dom';
import './logo.jpg'
import LoginPage from "../components/loginpage";

// Here, we display our Navbar
const Navbar = props => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  function onLgout() {
    console.log(history)
    auth.logout()
    history.push('/auth')

  }
  return (
    <div>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>

      </head>
      <body>

        <header>
          <div class="container">
            <nav>
              <ul>
                <p1>CampSpan'</p1>

                <li><a href="/">Home</a></li>
                <li><a href="/flashcards">Flashcards</a></li>
                <li><a href="/quiz">Quiz</a></li>
              
                { LoginPage.isLoggedIn 
                ? <li><a href="/create">Add Translation</a></li>
                  : <li><a href="/translations">All Translations</a></li>
                 }  
                   { LoginPage.isLoggedIn 
                  ? <li><a href="/usertranslations">All Translations</a></li>
                  : <li><a href="/login">Login</a></li>                }    
                    { LoginPage.isLoggedIn 
                  ? <li><a href="/loggedin">Profile</a></li>
                  : <li></li>
                }     
                 { LoginPage.isLoggedIn 
                  ? <li><a href="/signup">Register a User</a></li>
                  : <li></li>
                }     
              </ul>
            </nav>
          </div>
        </header>
      </body>
    </div>
  );
};

export default (Navbar);