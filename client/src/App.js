import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import UpdateFlashcard from "./components/flashcards/edit";
import AddFlashcard from './components/flashcards/create';
import Flashcards from './components/flashcards/flashcards';

import RecordList from "./components/recordList";
import HomePage from "./components/homepage"
import Quiz from "./components/quiz"

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/translations"> 
      <RecordList/>
      </Route>
      <Route path="/edit/:id" component={UpdateFlashcard} />

      <Route path="/flashcards" component={Flashcards} />
   
      <Route  path="/create" component={AddFlashcard} />


      <Route path="/quiz"> 
      <Quiz/>
      </Route>
    </div>
  );
};

export default App;