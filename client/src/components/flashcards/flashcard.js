import React from 'react'
import './flashcard.css'

export const FlashCard = ({ record, isFront }) => {

  return (
    <div className="card-container">
      <div className={record ? "card visibility" : "card"}>
        <div className={isFront ? "back card-face " : "front card-face"}>
          <div className={isFront ? "word" : "word_translation"}>{isFront ? record.word : record.word_translation}</div>
        </div>
      </div>
    </div>
  )
}