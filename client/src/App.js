import React from "react";
import {Switch} from "react-router-dom";
import { Route as Router, BrowserRouter, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";
import Register from "./components/register";
import Login from "./components/login";

import Navbar from "./components/navbar";
import UpdateFlashcard from "./components/flashcards/edit";
import AddFlashcard from './components/flashcards/create';
import Flashcards from './components/flashcards/flashcards';

import RecordList from "./components/recordList";
import HomePage from "./components/homepage"
import Quiz from "./components/quiz"
import RecordListFull from "./components/recordListFull";

function App ()  {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/translations"> 
      <RecordList/>
      </Route>
      <Route path="/usertranslations"> 
      <RecordListFull/>
      </Route>
      <Route path="/edit/:id" component={UpdateFlashcard} />

      <Route path="/flashcards">
      <Flashcards/>
</Route>
<Switch>
  <Route component={Register} exact path="/register"/>
  <Route component={Login} exact path="/login"/>
  </Switch>

    <Route path="/create" component={AddFlashcard} />


      <Route path="/quiz"> 
      <Quiz/>
      </Route>
    </div>
  );
};

export default App;