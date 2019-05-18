import React from 'react'
import useForm from '../../hooks/useForm'

const GuitarForm = ({ guitarSubmit, currentGuitar }) => {
  console.log(currentGuitar);
  const guitarObject = {
    name: '',
    foto: '',
    marca: '',
    tipo: '',
    id:''
  }

  if(currentGuitar){
    guitarObject.name = currentGuitar.name;
    guitarObject.foto = currentGuitar.foto;
    guitarObject.marca = currentGuitar.marca;
    guitarObject.tipo = currentGuitar.tipo;
    guitarObject.id = currentGuitar.id;
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
        <input className="form-control" id="name" type="text" name='name' value={values.name} onChange={handleChange} placeholder="name" required/>
      </div>
      <div className="form-group">
        <label for="foto">Foto</label>
        <input className="form-control" id="foto" type="url" name='foto' value={values.foto} onChange={handleChange} placeholder="foto" required/>
      </div>
      <div className="form-group">
        <label for="marca">Marca</label>
        <input className="form-control" id="marca" type="text" name='marca' value={values.marca} onChange={handleChange} placeholder="marca" required/>
      </div>

      <div className="form-check">
        <label className="form-check-label">
          <input type="radio" className="form-check-input" name="tipo" value="guitarra" onChange={handleChange} checked={values.tipo=='guitarra'} />Guitarra
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <input type="radio" className="form-check-input" name="tipo" value="bajo" onChange={handleChange} checked={values.tipo=='bajo'}/>Bajo
        </label>
      </div>
      <input type="hidden" name="id" value={values.id} onChange={handleChange} />
      <button type='submit' className="btn btn-secondary">Guardar</button>
    </form>
  </div>
  )
}

export default GuitarForm
