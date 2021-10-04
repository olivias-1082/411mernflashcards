import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import './create.css'

export default class Create extends Component {
  constructor(props) {
    super(props);
 
    this.onChangeWord = this.onChangeWord.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      word: "",

    };
  }
 
 


  onChangeWord(e) {
    this.setState({
      word: e.target.value,
    });
  }

 
  onSubmit(e) {
    e.preventDefault();
 
    const newword = {
      word: this.state.word,
      
    };
 

      axios
      .post("http://localhost:5000/record/add", newword)
      .then((res) => console.log(res.data));

      
    this.setState({
      word: "",
      word_translation: "",
    });
  }
 
  render() {
    return (
<div class="w3-container">
      <div style={{ marginTop: 20 }}>
        <h3 align="center">Create New Translation</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Word: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.word}
              onChange={this.onChangeWord}
            />
          </div>
          <div className="form-group">
            <label>Word translation: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.word_translation}
              onChange={this.onChangeWordTranslation}
            />
          </div>
          <div className="addbutton">
          <div className="form-group">
            <input
              type="submit"
              value="Add Translation"
              className="btn btn-primary"
            />
          </div>
          </div>
        </form>
      </div>
</div>
    );
  }
}