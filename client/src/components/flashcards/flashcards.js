import React, { Component, useState } from 'react'
import axios from 'axios'
import './flashcards.css'
const Flashcard = (record) => {
const words = record.word;
const translations = record.word_translation;
//document.querySelector('#cardId').classList.toggle('flip');

return (


<div class="flipcard h" >
  <div className="card2">
    <div className="front">
      <div> {words}</div>     
    </div>
    <div className="back">
      {translations}
    </div>
    </div>
</div>
)
}

const FlashCards = (props) => {
  

  return (
    <div>

      <div>
            <Flashcard record={props.record} word={props.word} word_translation={props.word_translation}/>
      </div>


    </div>
  )
}

export default class Flashcards extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteTranslation = this.deleteTranslation.bind(this);
    this.state = { records: [] };
  }
 
  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/record/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  // This method will delete a record based on the method
  deleteTranslation(id) {
    axios.delete("http://localhost:5000/" + id).then((response) => {
      console.log(response.data);
    });
 
    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
  }
 
  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
      return (
        <div className="margin">
        <FlashCards
          record={currentrecord}
          word = {currentrecord.word}
          word_translation ={currentrecord.word_translation}
          key= {currentrecord._id}
          />
          </div>
      );
    });
  }
 
  // This following section will display the table with the records of individuals.
  render() {
    return (

      <div >
<div className = "space">
  <p></p>
</div>
        <h1 align="center">Flashcards</h1>
        <div class="container" >

        <p align="center" >Hover over a card to see its spanish translation</p>
        </div>
    {this.recordList()}
       
      </div>
    );
  }
}