import React from 'react'
//import './flashcard.css'

export const FlashCard = ({ record, isWord}) => {
  const word = record.word;
  const word_translation = record.word_translation;

  console.log(word);
  return (
    <div className="card-container">
      <div className={record ? "card visibility" : "card"}>
        <div className={isWord ? "word_translations card-face " : "word card-face"}>
          <div className={isWord? "word" : "word_translation"}>{isWord ? word: word_translation}</div>
        </div>
      </div>
    </div>
  )
}