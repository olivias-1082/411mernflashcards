
import React, { Component } from "react";
import './homepage.css'

 
export default class HomePage extends Component {

  // This following section will display the table with the records of individuals.
  render() {
    return (
      <body>
        <head>
          <title>Hey'Hola</title>
        </head>
        <div class="title">
        <h1>Phrase of The Day</h1>
        </div>

       
        <div class="wordchange">
        <h2 class="phrases"></h2>
        </div>
        
       
      </body>
    );
  }
}