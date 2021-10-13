import React, {  useContext, useState,useReducer } from 'react'
import axios from 'axios'

const Flashcards = props =>{
  const [records, setRecords] = useState([]);

  const deleteCard = e=>{
    console.log(e)
    axios.delete(`http://localhost:5000/delete/${e}`)
    .then(res=>{
      console.log(res.data)
      props.refresh()
    })
  }
  const flip = e => {
    console.log(e.target.parentNode)
    if (e.target.parentNode.classList.contains("flipped")){
      e.target.parentNode.classList.remove("flipped")
    }else{
      e.target.parentNode.classList.add("flipped")
    }
  }
  if (props.displayType==="table"){
    return(
      <table className="col table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Front</th>
            <th scope="col">Back</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map( (record,i)=>
            <tr key={i}>
              <td>{i+1}</td>
              <td>{record.word}</td>
              <td>{record.word_translation}</td>
              <td>
                <div className="btn-group">
                  <button className="btn-sm btn-success"
                          data-toggle="modal" 
                          data-target="#editFormPopUp"
                          onClick={e=>props.edit(record._id)}
                          >Edit
                  </button>
                  <button className="btn-sm btn-danger"
                          onClick={e=>deleteCard(record._id)}
                          >Delete
                  </button>
                </div>
                
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  else {
    return(
      <div className={`d-grid grid-${props.columns}`}>
        {records.map((record,i)=>
          <div className="flip-card" key={i} onClick={flip}>
            <div className={`flip-card-inner font-${props.fontsize}`}>
              <div className="flip-card-front">
                {props.reverse? record.word_translation : record.word}
              </div>
              <div className="flip-card-back">
                {props.reverse? record.word : record.word_translation}
              </div>
            </div>
          </div>
        )}
    </div>    
        
    );
  }
}

export default Flashcards