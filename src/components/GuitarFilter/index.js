import React from 'react'

const GuitarFilter = props => {
  const { placeHolder, filterText, handleChange } = props

  return (
    <span>
      <input
        type="text"
        placeholder={placeHolder}
        value={filterText}
        onChange={handleChange}
        className="form-control"
      />
      <select className="form-control" name="tipo" onChange={handleChange}>
        <option value="">Tipo</option>
        <option value="guitarra">Guitarra</option>
        <option value="bajo">Bajo</option>
      </select>
  </span>)
}

export default GuitarFilter
