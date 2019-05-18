import React, { Component } from 'react';
import GuitarFilter from '../../components/GuitarFilter'
import GuitarForm from '../../components/GuitarForm'
import GuitarUl from '../../components/GuitarUl'
import { connect } from 'react-redux'
import { removeGuitar, editGuitar, handleInputChange, handleSelectChange, toggleForm, saveGuitar } from '../../redux/guitars'


const GuitarContainer = (props) => {
  const { guitars, heroIdUsingRing, removeGuitar, editGuitar, handleInputChange, handleSelectChange, filterText, filterTipo, usingForm, saveGuitar, toggleForm, currentGuitar } = props

  return (
    <div className="index container">
    <p>
      <button onClick={toggleForm} className="btn btn-primary">Agregar</button>
       <GuitarFilter handleChange={handleInputChange} handleSelectChange={handleSelectChange} placeHolder='Buscar por nombre...' value={filterText}/>
    </p>
    {usingForm && <GuitarForm guitarSubmit={saveGuitar} currentGuitar={currentGuitar} />}
    <GuitarUl
        guitars={guitars}
        removeGuitar={removeGuitar}
        editGuitar={editGuitar}
        usingRing={heroIdUsingRing}
      />

    </div>
  )
}

const mapStateToProps = state => {
  const { guitarList, entities, heroIdUsingRing, filterText, filterTipo, usingForm, currentGuitar } = state
  console.log('filterText=>'+filterText);

  let filteredGuitars = guitarList.map(guitar => entities[guitar])

  if (filterText) {
    filteredGuitars = filteredGuitars.filter(guitar => {
      return guitar.name.toLowerCase().includes(filterText)
    })
  }

  if (filterTipo) {
    filteredGuitars = filteredGuitars.filter(guitar => {
      return guitar.tipo.toLowerCase().includes(filterTipo)
    })
  }

  console.log(filteredGuitars);

  return {
    guitars: filteredGuitars,
    heroIdUsingRing,
    filterText,
    filterTipo,
    usingForm,
    currentGuitar
  }
}

const mapDispatchToProps = {
  removeGuitar,
  editGuitar,
  handleInputChange,
  handleSelectChange,
  toggleForm,
  saveGuitar
}

export default  connect(mapStateToProps, mapDispatchToProps)(GuitarContainer)
