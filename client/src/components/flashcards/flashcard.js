import React from 'react'
import './flashcard.css'

export const Flashcard = ({ currentCard, isFront }) => {

  return (
    <div className="card-container">
      <div className={currentCard ? "card visibility" : "card"}>
        <div className={isFront ? "back card-face " : "front card-face"}>
          <div className={isFront ? "word" : "word_translation"}>{isFront ? currentCard.word : currentCard.word_translation}</div>
        </div>
      </div>
    </div>
  )
}