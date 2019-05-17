import React from 'react'
import GuitarLi from './GuitarLi'

const GuitarUl = ({guitars, killHero, putRing, usingRing}) => (
  <ul className="guitars">
      {guitars.map((hero, index) => (
        <GuitarLi
          key={index}
          hero={hero}
          killHero={killHero}
          putRing={putRing}
          usingRing={usingRing}
        />
      ))}
  </ul>
)

export default GuitarUl
