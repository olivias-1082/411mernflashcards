import React, { Component } from "react";
import './quiz.css'
import axios from 'axios'

export default class Quiz extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:5000/record/random")
      .then((response) => {
        this.setState({
          record1_word: response.data.word,
          record1_word_translation: response.data.word_translation,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
      axios
      .get("http://localhost:5000/record/random")
      .then((response) => {
        this.setState({
          record2_word: response.data.word,
          record2_word_translation: response.data.word_translation,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
      axios
      .get("http://localhost:5000/record/random")
      .then((response) => {
        this.setState({
          record3_word: response.data.word,
          record3_word_translation: response.data.word_translation,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
    render() {
        return (
    
<body>
  

<h3>Would you like to take a quiz? Of course you don't :(</h3>
    <form action="result.js" method="post" id="quiz">
 
 <ol>
 
     <li>
     
         <h3>What is the spanish translation for {this.state.record1_word}?</h3>
         
         <div>
             <input type="radio" name="question-1-answers" id="question-1-answers-A" value="A" />
             <label for="question-1-answers-A">A) {this.state.record1_word_translation} </label>
         </div>
         
         <div>
             <input type="radio" name="question-1-answers" id="question-1-answers-B" value="B" />
             <label for="question-1-answers-B">B) {record.word_translation}</label>
         </div>
         
         <div>
             <input type="radio" name="question-1-answers" id="question-1-answers-C" value="C" />
             <label for="question-1-answers-C">C) {record.word_translation}</label>
         </div>
         
         <div>
             <input type="radio" name="question-1-answers" id="question-1-answers-D" value="D" />
             <label for="question-1-answers-D">D) {record.word_translation}</label>
         </div>
     
     </li>
     
     <li>
     
     <h3>What is the spanish translation for {this.state.record2_word}?</h3>
         
         <div>
             <input type="radio" name="question-2-answers" id="question-2-answers-A" value="A" />
             <label for="question-2-answers-A">A) {record.word_translation} </label>
         </div>
         
         <div>
             <input type="radio" name="question-2-answers" id="question-2-answers-B" value="B" />
             <label for="question-2-answers-B">B) {record.word_translation}</label>
         </div>
         
         <div>
             <input type="radio" name="question-2-answers" id="question-2-answers-C" value="C" />
             <label for="question-2-answers-C">C) {this.state.record2_word}</label>
         </div>
         
         <div>
             <input type="radio" name="question-2-answers" id="question-1-answers-D" value="D" />
             <label for="question-2-answers-D">D) {record.word_translation}</label>
         </div>
     </li>
     
     <li>
     
     <h3>What is the spanish translation for {this.state.record3_word}?</h3>
         
         <div>
             <input type="radio" name="question-3-answers" id="question-3-answers-A" value="A" />
             <label for="question-3-answers-A">A) {this.state.record3_word} </label>
         </div>
         
         <div>
             <input type="radio" name="question-3-answers" id="question-3-answers-B" value="B" />
             <label for="question-3-answers-B">B) {record.word_translation} </label>
         </div>
         
         <div>
             <input type="radio" name="question-3-answers" id="question-3-answers-C" value="C" />
             <label for="question-3-answers-C">C) {record.word_translation}</label>
         </div>
         
         <div>
             <input type="radio" name="question-3-answers" id="question-3-answers-D" value="D" />
             <label for="question-3-answers-D">D) {record.word_translation}</label>
         </div>
     
     </li>
     
     <li>
     
     <h3>What is the spanish translation for {record.word}?</h3>
         
         <div>
             <input type="radio" name="question-4-answers" id="question-4-answers-A" value="A" />
             <label for="question-4-answers-A">A) {record.word_translation} </label>
         </div>
         
         <div>
             <input type="radio" name="question-4-answers" id="question-4-answers-B" value="B" />
             <label for="question-4-answers-B">B) {record.word_translation}</label>
         </div>
         
         <div>
             <input type="radio" name="question-4-answers" id="question-4-answers-C" value="C" />
             <label for="question-4-answers-C">C) {record.word_translation}</label>
         </div>
         
         <div>
             <input type="radio" name="question-4-answers" id="question-4-answers-D" value="D" />
             <label for="question-4-answers-D">D) {record.word_translation}</label>
         </div>
     
     </li>
 
 </ol>
 
 <input type="submit" value="Submit" class="submitbtn" />

</form>
</body>
        );
      }
};