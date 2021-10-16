import React, { useContext, useEffect, useState } from 'react'
import { FlashCard } from './flashcard'
import axios from 'axios'
const FlashCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFront, setIsFront] = useState(true)
  const[records] = useState([]);
  useEffect(() => {
    getFlashcards()
  }, )
  
  const handleCardFlip = () => {
    setIsFront(!isFront)
  }
  async function getFlashcards() {
    try {
      const res = await axios.get('http://localhost5000/record')
      console.log(res)
    
    } catch (err) {
      console.log(err);
    }
  }

  const handleNextCard = () => {
    setCurrentIndex((currentIndex + 1) % records.length)
    setIsFront(true)
  }

  const handlePreviousCard = () => {
    setCurrentIndex((currentIndex - 1 + records.length) % records.length )
    setIsFront(true)
  }


  const record = records && records.length && records[currentIndex]

  return (
    <div>

      <div>
          <div className="progress"  align = "center">{currentIndex + 1}/{records.length}</div>
          <div onClick={handleCardFlip} align = "center">
            <FlashCard record={record} isFront={isFront}/>
          </div>
      </div>
      <div className="btn-container" align = "center">
        <button className="btn" onClick={handlePreviousCard}>Previous</button>
        <button className="btn" onClick={handleNextCard}>Next</button>
      </div>

    </div>
  )
}

export default FlashCards