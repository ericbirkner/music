import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'
import { removeGuitar, editGuitar, getGuitar, handleInputChange, handleSelectChange, toggleForm, saveGuitar } from '../../redux/guitars'

const GuitarInfo = (props) => {
  console.log(props.match.params.guitarId);
  const guitarId = props.match.params.guitarId;
  const res = getGuitar(guitarId);

  console.log(res);

  return (
      <div className="container card">
        <div className="left">
          <h2>sdds</h2>
          <h5>sd</h5>
        </div>
        <div className="right">
          <img src="hola"/>
            <div className="controls">
              <button type="button" className="btn btn-warning" >
               Edit
               </button>
               <button type="button" className="btn btn-danger" >
                  <span className="glyphicon glyphicon-remove"></span> Remove
               </button>

            </div>
        </div>

      </div>
    )

}

export default GuitarInfo
