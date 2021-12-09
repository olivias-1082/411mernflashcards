import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from "react-router";
import './edit.css'

import Record from '../recordList'
class UpdateFlashcard extends Component {
  constructor(props) {
    super(props);
    this.onChangeWord = this.onChangeWord.bind(this);
    this.onChangeWordTranslation = this.onChangeWordTranslation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      id: this.props.match.params.id,
      word: "",
      word_translation: "",
      records: [],
    };
  }
  componentDidMount() {

    axios
      .get("http://localhost:5000/record/" + this.props.match._id)
      .then(record => {
        this.setState({
          id: record.data.id,
          word: record.data.word,
          word_translation: record.data.word_translation,
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

    this.props.history.push("/translations");
  }

  render() {
    return (
      <div class="w3-container">

        <div>
          <h3 align="center">Update Translation</h3>
          <form onSubmit={this.onSubmit} autocomplete="off">
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
            <div className="addbutton">
              <div className="form-group">
                <input
                  type="submit"
                  value="Update Translation"
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


export default withRouter(UpdateFlashcard);