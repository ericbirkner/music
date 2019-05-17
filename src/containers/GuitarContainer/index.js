import React, { Component } from 'react';
import GuitarFilter from '../../components/GuitarFilter'
import GuitarForm from '../../components/GuitarForm'
import GuitarUl from '../../components/GuitarUl'
import { connect } from 'react-redux'
import { removeGuitar, putRing, handleInputChange, handleSelectChange, toggleForm, saveGuitar } from '../../redux/guitars'


const GuitarContainer = (props) => {
  const { guitars, heroIdUsingRing, removeGuitar, putRing, handleInputChange, handleSelectChange, filterText, filterTipo, usingForm, saveGuitar, toggleForm } = props

  return (
    <div className="index container">
    <p>
      <button onClick={toggleForm} className="btn btn-primary">Agregar</button>
       <GuitarFilter handleChange={handleInputChange} handleSelectChange={handleSelectChange} placeHolder='Buscar por nombre...' value={filterText}/>
    </p>
    {usingForm && <GuitarForm guitarSubmit={saveGuitar} />}
    <GuitarUl
        guitars={guitars}
        removeGuitar={removeGuitar}
        putRing={putRing}
        usingRing={heroIdUsingRing}
      />

    </div>
  )
}

const mapStateToProps = state => {
  const { guitarList, entities, heroIdUsingRing, filterText, filterTipo, usingForm } = state
  console.log('filterText=>'+filterText);

  let filteredHeroes = guitarList.map(hero => entities[hero])

  if (filterText) {
    filteredHeroes = filteredHeroes.filter(hero => {
      return hero.name.toLowerCase().includes(filterText)
    })
  }

  if (filterTipo) {
    filteredHeroes = filteredHeroes.filter(hero => {
      return hero.tipo.toLowerCase().includes(filterTipo)
    })
  }

  console.log(filteredHeroes);

  return {
    guitars: filteredHeroes,
    heroIdUsingRing,
    filterText,
    filterTipo,
    usingForm
  }
}

const mapDispatchToProps = {
  removeGuitar,
  putRing,
  handleInputChange,
  handleSelectChange,
  toggleForm,
  saveGuitar
}

export default  connect(mapStateToProps, mapDispatchToProps)(GuitarContainer)
