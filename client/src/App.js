import React from "react";
import { Switch } from "react-router-dom";
import { Route as Router, BrowserRouter, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";

import Navbar from "./components/navbar";
import UpdateFlashcard from "./components/flashcards/edit";
import AddFlashcard from './components/flashcards/create';
import Flashcards from './components/flashcards/flashcards';

import HomePage from "./components/homepage";
import Quiz from "./components/quiz";
import RecordListFull from "./components/recordListFull";
import LoginPage from "./components/loginpage";
import LoggedInPage from "./components/loggedIn";
import PrivateRoute from "./components/PrivateRoute";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>

          <Navbar />

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/edit/:id" component={UpdateFlashcard} />

          <PrivateRoute path="/translations" component={RecordListFull} />

          <Route path="/flashcards">
            <Flashcards />
          </Route>

          <PrivateRoute path="/create" component={AddFlashcard} />

          <Route path="/quiz">
            <Quiz />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <PrivateRoute path="/loggedIn" component={LoggedInPage} />

        </div>
      </Router>
    )
  }

};


export default App;