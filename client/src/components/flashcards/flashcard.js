import React from 'react'
import './flashcard.css'

export const Flashcard = ({ record, isFront }) => {
const word = "hello";
const word_translation = "hola";
//const word = record.word;
//const word_translation = record.word_translation;
  return (
    <div className="card-container">
      <div className={record ? "card visibility" : "card"}>
        <div className={isFront ? "back card-face " : "front card-face"}>
          <div className={isFront ? "word" : "word_translation"}>{isFront ? word : word_translation}</div>
        </div>
      </div>
    </div>
  )
}