import React from 'react'
import GuitarLi from './GuitarLi'

const GuitarUl = ({guitars, killHero, putRing, usingRing}) => (
  <table className="characters-table" border='1' align='center'>
    <tbody>
      <tr className="character-row">
        <th>Name</th>
        <th>Race</th>
        <th>Age</th>
        <th>Weapon</th>
        <th></th>
      </tr>

      {guitars.map((hero, index) => (
        <GuitarLi
          key={index}
          hero={hero}
          killHero={killHero}
          putRing={putRing}
          usingRing={usingRing}
        />
      ))}
    </tbody>
  </table>
)

export default GuitarUl
