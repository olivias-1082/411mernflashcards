import React, { Component, useState } from 'react'
import axios from 'axios'
import './flashcard.css';
import './flashcards.css'
const Flashcard = (record, isFront) => {
const words = record.word;
const translations = record.word_translation;
return (

  <div className="card-container">
  <div className={record ? "card visibility" : "card"}>
   
    <div className={isFront ? "back card-face " : "front card-face"}>
      <div className={isFront ? "words" : "translations"}>{isFront ? words : translations}</div>
    </div>
  </div>
</div>
)
}

const FlashCards = (props) => {
  const [isFront, setIsFront] = useState(true)

  const handleCardFlip = () => {
    setIsFront(!isFront)
  }

  return (
    <div>

      <div>
          <div onClick={handleCardFlip} align = "center">
            <Flashcard record={props.record} isFront={isFront} word={props.word} word_translation={props.word_translation}/>
          </div>
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
        <FlashCards
          record={currentrecord}
          word = {currentrecord.word}
          word_translation ={currentrecord.word_translation}
          key= {currentrecord._id}
          />
      );
    });
  }
 
  // This following section will display the table with the records of individuals.
  render() {
    return (

      <div>
<div className = "space">
  <p></p>
</div>
        <h3 align="center">Flashcards</h3>
    {this.recordList()}
       
      </div>
    );
  }
}