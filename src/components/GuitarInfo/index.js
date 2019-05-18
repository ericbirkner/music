import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const GuitarInfo = (props) => {
  //const { removeGuitar, editGuitar, usingRing } = props
  const { name,  marca, foto, id, tipo, status } = props.hero


  return (
      <div className="container card">
        <div className="left">
          <h2>{tipo} - {name}</h2>
          <h5>{marca}</h5>
        </div>
        <div className="right">
          <img src={foto}/>
            <div className="controls">
              <button type="button" className="btn btn-warning" >
               Edit
               </button>
               <button type="button" className="btn btn-danger" >
                  <span className="glyphicon glyphicon-remove"></span> Remove
               </button>
               <Link to="/guitar/{id}">Users</Link>
            </div>
        </div>

      </div>
    )

}

export default GuitarInfo
