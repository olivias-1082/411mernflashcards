import {  EDITCARD, ADDCARD, DELETECARD, GETCARDS, CARDERROR } from './types'

export default (state, action) => {
  switch(action.type) {
    case ADDCARD:
      return {
        ...state,
        records: [...state.records, action.payload]
      }
      case EDITCARD:
        console.log("from app reducer", state.records)
        return {
          ...state,
          records: state.records.map(record => record._id === action.payload._id ? action.payload : record)
        }
    case DELETECARD:
      return {
        ...state,
        records: state.records.filter(record => record._id !== action.payload)
      }

      case GETCARDS:
        return {
          ...state,
          loading: false,
          records: action.payload
        }
    
    case CARDERROR:
      return {
        ...state,
        error: action.payload
      }
      
    default:
      return state
  }
}