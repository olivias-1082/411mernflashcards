import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";
 
class Edit extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);
 
    this.onChangeWord = this.onChangeWord.bind(this);
    this.onChangeWordTranslation = this.onChangeWordTranslation.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      word: "",
      word_translation: "",
      records: [],
    };
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/record/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          person_name: response.data.person_name,
          person_position: response.data.person_position,
          person_level: response.data.person_level,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  // These methods will update the state properties.
  onChangeWord(e) {
    this.setState({
      word: e.target.value,
    });
  }
 
  onChangeWordTranslation(e) {
    this.setState({
      word_translation: e.target.value,
    });
  }
 
  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    const newEditedperson = {
      word: this.state.word,
      word_translation: this.state.word_translation,
    };
    console.log(newEditedperson);
 
    // This will send a post request to update the data in the database.
    axios
      .post(
        "http://localhost:5000/update/" + this.props.match.params.id,
        newEditedperson
      )
      .then((res) => console.log(res.data));
 
    this.props.history.push("/");
  }
 
  // This following section will display the update-form that takes the input from the user to update the data.
  render() {
    return (
      <div>
        <h3 align="center">Update Translation</h3>
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
            <label>Word Translation: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.word_translation}
              onChange={this.onChangeWordTranslation}
            />
          </div>
 
          <div className="form-group">
            <input
              type="submit"
              value="Update Translation"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
 
// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.
 
export default withRouter(Edit);