import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from "react-router";
 
class Edit extends Component {
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
 
  onSubmit(e) {
    e.preventDefault();
    const newEditedperson = {
      word: this.state.word,
      word_translation: this.state.word_translation,
    };
    console.log(newEditedperson);
 
    axios
      .post(
        "http://localhost:5000/update/" + this.props.match.params.id,
        newEditedperson
      )
      .then((res) => console.log(res.data));
 
    this.props.history.push("/");
  }
 
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
 
 
export default withRouter(Edit);