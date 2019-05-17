import React from 'react'
import GuitarLi from './GuitarLi'

const GuitarUl = ({guitars, removeGuitar, putRing, usingRing}) => (
  <ul className="guitars">
      {guitars.map((hero, index) => (
        <GuitarLi
          key={index}
          hero={hero}
          removeGuitar={removeGuitar}
          putRing={putRing}
          usingRing={usingRing}
        />
      ))}
  </ul>
)

export default GuitarUl
