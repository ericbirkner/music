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

      <div className="form-check">
        <label className="form-check-label">
          <input type="radio" className="form-check-input" name="tipo" value="guitarra" onChange={handleChange} />Guitarra
        </label>
      </div>
      <div class="form-check">
        <label className="form-check-label">
          <input type="radio" className="form-check-input" name="tipo" value="bajo" onChange={handleChange} />Bajo
        </label>
      </div>

      <button type='submit' className="btn btn-secondary">Guardar</button>
    </form>
  </div>
  )
}

export default GuitarForm
