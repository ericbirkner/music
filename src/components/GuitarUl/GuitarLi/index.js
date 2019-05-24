import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const GuitarLi = (props) => {
  const { removeGuitar, editGuitar, usingRing } = props
  const { name,  marca, foto, id, tipo, status } = props.hero

  const isDead = status === 'dead'


    return(
      <li className={`${isDead ? 'dead' : ''}`}>
        <div className="left">
          <h2>{tipo} - {name}</h2>
          <h5>{marca}</h5>
        </div>
        <div className="right">
          <img src={foto}/>
            <div className="controls">
              <button type="button" className="btn btn-warning" onClick={() => editGuitar(id)}>
               Edit
               </button>
               <button type="button" className="btn btn-danger" onClick={() => removeGuitar(id)}>
                  <span className="glyphicon glyphicon-remove"></span> Remove
               </button>
               <Link to={`/guitar/${id}`}>Ver</Link>
            </div>
        </div>

      </li>
    )
}

export default GuitarLi
