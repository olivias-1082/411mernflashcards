import React, { Component } from "react";
// This will require to npm install axios
import './flashcards.css'

export default class FlashcardSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      word_translation: "",
      showAnswer: false,
    }


}

  answerClick = () => {
    this.setState({
        showAnswer: true
    })
}

    render() {
      let newword = this.state.word;
      let cardDivFront;
      let cardDivBack;
        cardDivFront = <div>{this.state.word}</div>
        cardDivBack = <button onClick={this.answerClick} className="waves-effect waves-light btn">See Answer</button>
        if (this.state.showAnswer) {
          cardDivBack = <div>{this.state.newword.word_translation}</div>
      }

        return (
    
<body>

<h3>This will be the  page with flashcards</h3>

</body>
        );
      }
};