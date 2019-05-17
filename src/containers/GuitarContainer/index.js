import React, { Component } from 'react';
/*
import TableFilter from '../../components/TableFilter'


*/
import GuitarForm from '../../components/GuitarForm'
import GuitarUl from '../../components/GuitarUl'
import { connect } from 'react-redux'
import { killHero, putRing, handleInputChange, toggleForm, saveHero } from '../../redux/guitars'


const GuitarContainer = (props) => {
  const { guitars, heroIdUsingRing, killHero, putRing, handleInputChange, filterText, usingForm, saveHero, toggleForm } = props

  return (
    <div className="index container">
    <p><button onClick={toggleForm} className="btn btn-primary">Agregar</button></p>
    {usingForm && <GuitarForm heroSubmit={saveHero} />}
    <GuitarUl
        guitars={guitars}
        killHero={killHero}
        putRing={putRing}
        usingRing={heroIdUsingRing}
      />

    </div>
  )
}

const mapStateToProps = state => {
  const { guitarList, entities, heroIdUsingRing, filterText, usingForm } = state
  console.log('filterText=>'+filterText);

  let filteredHeroes = guitarList.map(hero => entities[hero])

  if (filterText) {
    filteredHeroes = filteredHeroes.filter(hero => {
      return hero.name.toLowerCase().includes(filterText)
    })
  }

  console.log(filteredHeroes);

  return {
    guitars: filteredHeroes,
    heroIdUsingRing,
    filterText,
    usingForm
  }
}

const mapDispatchToProps = {
  killHero,
  putRing,
  handleInputChange,
  toggleForm,
  saveHero
}

export default  connect(mapStateToProps, mapDispatchToProps)(GuitarContainer)
