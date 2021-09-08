import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
 
export default class Create extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);
 
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePersonPosition = this.onChangePersonPosition.bind(this);
    this.onChangePersonLevel = this.onChangePersonLevel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      person_name: "",
      person_position: "",
      person_level: "",
    };
  }
 
  // These methods will update the state properties.
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value,
    });
  }
 
  onChangePersonPosition(e) {
    this.setState({
      person_position: e.target.value,
    });
  }
 
  onChangePersonLevel(e) {
    this.setState({
      person_level: e.target.value,
    });
  }
 
// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
 
    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newperson = {
      word: this.state.word,
      word_translation: this.state.word_translation,
      person_level: this.state.person_level,
    };
 
    axios
      .post("http://localhost:5000/record/add", newperson)
      .then((res) => console.log(res.data));
 
    // We will empty the state after posting the data to the database
    this.setState({
      word: "",
      word_translation: "",
      person_level: "",
    });
  }
 
  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Translation</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Word: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.word}
              onChange={this.onChangePersonName}
            />
          </div>
          <div className="form-group">
            <label>Word translation: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.word_translation}
              onChange={this.onChangePersonPosition}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Translation"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}