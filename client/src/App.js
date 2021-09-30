import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";
import HomePage from "./components/homepage"
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
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route>
    </div>
  );
};

export default App;