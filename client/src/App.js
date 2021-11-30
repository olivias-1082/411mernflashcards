import React from "react";
import {Switch} from "react-router-dom";
import { Route as Router, BrowserRouter, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { GoogleLogin, GoogleLogout } from "react-google-login";
import GoogleLoginComponent from './googlebutton.component'

import Navbar from "./components/navbar";
import UpdateFlashcard from "./components/flashcards/edit";
import AddFlashcard from './components/flashcards/create';
import Flashcards from './components/flashcards/flashcards';

import Login from "./components/login";
import RecordList from "./components/recordList";
import HomePage from "./components/homepage"
import Quiz from "./components/quiz"
import RecordListFull from "./components/recordListFull";

class App extends React.Component {

  render() {
    return (
  <Router> 

  <div>
  <Route exact path="/login">
        <Login />
    </Route>
    
    <Navbar/> 
      <Route exact path="/"> 
        <HomePage/>
      </Route>

      <Route path="/usertranslations"> 
        <RecordListFull/>
      </Route>
  
      <Route path="/translations"> 
        <RecordList/>
      </Route>

      <Route path="/edit/:id" component={UpdateFlashcard} />

      <Route path="/flashcards">
        <Flashcards/>
      </Route>

    <Route path="/create" component={AddFlashcard} />

      <Route path="/quiz"> 
        <Quiz/>
      </Route>
    </div>
  </Router>
    )}

};


export default App;