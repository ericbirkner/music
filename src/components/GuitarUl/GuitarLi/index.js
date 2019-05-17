import React from 'react'

const GuitarLi = (props) => {
  const { removeGuitar, putRing, usingRing } = props
  const { name,  marca, foto, id, tipo, status } = props.hero

  const isDead = status === 'dead'

  let toReturn

  if (status === 'using-ring') {
    toReturn = null
  } else {
    toReturn = (
      <li className={`${isDead ? 'dead' : ''}`}>
        <div className="left">
          <h2>{tipo} - {name}</h2>
          <h5>{marca}</h5>
        </div>
        <div className="right">
          <img src={foto}/>
            <div className="controls">
              <button type="button" className="btn btn-warning" onClick={() => putRing(id)}>
               Edit
               </button>
               <button type="button" className="btn btn-danger" onClick={() => removeGuitar(id)}>
                  <span className="glyphicon glyphicon-remove"></span> Remove
               </button>
            </div>
        </div>

      </li>
    )
  }

  return toReturn
}

export default GuitarLi
