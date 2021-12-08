import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";
import './recordList.css';
const Record = (props) => (
  <tr>
    <td>{props.record.word}</td>
    <td>{props.record.word_translation}</td>
    <td>
      <Link to={"/edit/" + props.record._id}>Edit</Link> |

      <a
        href="/"
        onClick={() => {
          axios.delete("http://localhost:5000/record/delete/" + props.key).then((response) => {
            console.log(response.data);
          });
          setTimeout(function () { window.location.reload(); }, 10);

        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class RecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
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



  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
          key={currentrecord._id}
        />

      );
    });
  }

  // This following section will display the table with the records of individuals.
  render() {
    return (

      <div>
        <div class="w3-container">

          <h3 align="center">Words and Translations</h3>
          <table className="table table-striped" style={{ marginTop: 5 }}>
            <thead>
              <tr>
                <th>English Word</th>
                <th>Spanish Translation</th>
              </tr>
            </thead>
            <tbody>{this.recordList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}