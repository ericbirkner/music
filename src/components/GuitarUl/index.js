import React from 'react'
import GuitarLi from './GuitarLi'

const GuitarUl = ({guitars, removeGuitar, editGuitar, usingRing}) => (
  <ul className="guitars">
      {guitars.map((hero, index) => (
        <GuitarLi
          key={index}
          hero={hero}
          removeGuitar={removeGuitar}
          editGuitar={editGuitar}
          usingRing={usingRing}
        />
      ))}
  </ul>
)

export default GuitarUl
