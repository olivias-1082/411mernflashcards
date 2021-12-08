import React, { useState } from "react"
import axios from "axios"

const AddCard = props => {
  const [word, setWord] = useState("")
  const [word_translation, setWordTranslation] = useState("")
  const [errors, setErrors] = useState({})
  const addCard = e => {
    e.preventDefault();
    const newCard = {
      "word": word,
      "word_translation": word_translation
    }
    console.log(newCard)
    axios.post("http://localhost:5000/record/add", newCard)
      .then(res => {
        res.data.errors ?
          setErrors(res.data.errors)
          :
          props.refresh();

        setWord("");
        setWordTranslation("");
      })
    setTimeout(function () { window.location.reload(); }, 10);
    alert('Your translation has been sucessfully added');

  }
  return (
    <div class="w3-container">

      <div style={{ marginTop: 20 }}>
        <h3 align="center"> Create a Translation</h3>
        <form onSubmit={e => addCard(e)}>
          <label htmlFor="words">Word:</label>
          <input name="word"
            style={{ width: "100%" }}
            rows="1"
            value={word}
            placeholder={errors.word ? errors.word.properties.message : null}
            onChange={e => setWord(e.target.value)}>
          </input>
          <label htmlFor="word_translation">Word Translation:</label>
          <input name="word_translation"
            style={{ width: "100%" }}
            rows="1"
            value={word_translation}
            placeholder={errors.word_translation ? errors.word_translation
              .properties.message : null}
            onChange={e => setWordTranslation(e.target.value)}>
          </input>
          <button className="btn btn-info"
            type="submit">
            Add Card
      </button>
        </form>
      </div>
    </div>
  );
}

export default AddCard