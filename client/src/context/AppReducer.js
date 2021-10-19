import { GET_FLASHCARDS, ADD_FLASHCARD, DELETE_FLASHCARD, UPDATE_FLASHCARD, FLASHCARD_ERROR } from './types'

export default (state, action) => {
  switch(action.type) {

    case GET_FLASHCARDS:
      return {
        ...state,
        loading: false,
        flashcards: action.payload
      }

    case ADD_FLASHCARD:
      return {
        ...state,
        // Get the intial array of cards in addition to the new card
        flashcards: [...state.flashcards, action.payload]
      }

    case DELETE_FLASHCARD:
      return {
        ...state,
        flashcards: state.flashcards.filter(flashcard => flashcard._id !== action.payload)
      }

    case UPDATE_FLASHCARD:
      console.log("from app reducer", state.flashcards)
      return {
        ...state,
        flashcards: state.flashcards.map(flashcard => flashcard._id === action.payload._id ? action.payload : flashcard)
      }
    
    case FLASHCARD_ERROR:
      return {
        ...state,
        error: action.payload
      }
      
    default:
      return state
  }
}