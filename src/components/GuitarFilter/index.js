import React from 'react'

const GuitarFilter = props => {
  const { placeHolder, filterText, filterTipo, handleChange, handleSelectChange } = props

  return (
    <span>
      <input
        type="text"
        placeholder={placeHolder}
        value={filterText}
        onChange={handleChange}
        className="form-control"
      />
      <select className="form-control" name="tipo" onChange={handleSelectChange}>
        <option value="">Filtrar por Tipo</option>
        <option value="guitarra">Guitarra</option>
        <option value="bajo">Bajo</option>
      </select>
  </span>)
}

export default GuitarFilter
