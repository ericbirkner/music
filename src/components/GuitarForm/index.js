import React from 'react'
import useForm from '../../hooks/useForm'

const GuitarForm = ({ guitarSubmit }) => {
  const guitarObject = {
    name: '',
    foto: '',
    marca: '',
    tipo: ''
  }

  const {
    values,
    handleChange,
    handleSubmit
  } = useForm(() => guitarSubmit(values), guitarObject)

  return (
    <div className="card">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="name">Nombre</label>
        <input className="form-control" id="name" type="text" name='name' value={values.name} onChange={handleChange} placeHolder="name" required/>
      </div>
      <div className="form-group">
        <label for="foto">Foto</label>
        <input className="form-control" id="foto" type="url" name='foto' value={values.foto} onChange={handleChange} placeHolder="foto" required/>
      </div>
      <div className="form-group">
        <label for="marca">Marca</label>
        <input className="form-control" id="marca" type="text" name='marca' value={values.marca} onChange={handleChange} placeHolder="marca" required/>
      </div>
      <div className="form-group">
        <label for="tipo">Tipo</label>
        <input className="form-control" id="tipo" type="text" name='tipo' value={values.tipo} onChange={handleChange} placeHolder="tipo" required/>
      </div>
      <button type='submit' className="btn btn-secondary">Guardar</button>
    </form>
  </div>
  )
}

export default GuitarForm
