const REMOVE = 'REMOVE'
const EDIT_GUITAR = 'EDIT_GUITAR'
const INPUT_CHANGE = 'INPUT_CHANGE'
const TIPO_CHANGE = 'TIPO_CHANGE'
const TOGGLE_FORM = 'TOGGLE_FORM'
const SAVE_GUITAR = 'SAVE_GUITAR'
const GET_GUITAR = 'GET_GUITAR'

export const removeGuitar = id => {
  console.log('IM BEING CALLED 1')
  return ({
    type: REMOVE,
    payload: {
      id
    }
  })
}

export const handleInputChange = (e) => {
  return ({
    type: INPUT_CHANGE,
    payload: {
      e
    }
  })
}

export const handleSelectChange = (e) => {
  return ({
    type: TIPO_CHANGE,
    payload: {
      e
    }
  })
}

export const toggleForm = () => {
  return({
    type: TOGGLE_FORM,
    payload:{

    }
  })
}

export const saveGuitar = (values) => {
  //console.log('SAVE_GUITAR')
  return ({
    type: SAVE_GUITAR,
    payload: {
      values
    }
  })
}

export const editGuitar = (id) => {
  //console.log('FUNCTION EDIT_GUITAR')
  return ({
    type: EDIT_GUITAR,
    payload: {
      id
    }
  })
}

export const getGuitar = (id) => {
  //console.log('FUNCTION EDIT_GUITAR')
  return ({
    type: GET_GUITAR,
    payload: {
      id
    }
  })
}


const editEntity = (state,id,params)=>{
  return{
    ...state.entities,
    [id]:{
      ...state.entities[id],
      ...params
    }
  }
}

export default (state = initialState, action) => {
  console.log('Llega al reducer la action', action)
  switch (action.type) {

    case REMOVE:{
      console.log('Llego la action', REMOVE)
      const { id } = action.payload
      const tmp_guitarList = state.guitarList;
      //quito el elemento de la lista
      tmp_guitarList.splice(id,1);
      console.log(tmp_guitarList)
      return {
        ...state,
        entities: editEntity(state,id,{status:'dead'}),
        guitarList: [...tmp_guitarList]
      }
    }

    case EDIT_GUITAR:{
      const { id } = action.payload
      console.log('usando EDIT_GUITAR id:'+id);
      return({
        ...state,
        usingForm: !state.usingForm,
        guitarEditing: id,
        currentGuitar:state.entities[id]
      })
    }

    case GET_GUITAR:{
      const { id } = action.payload
      console.log('usando GET_GUITAR id:'+id);
      return({
        currentGuitar:state.entities[id]
      })
    }

    case TOGGLE_FORM:{
      console.log('holi desde toggleForm');
      return({
        ...state,
        usingForm: !state.usingForm
      })
    }

    case INPUT_CHANGE:{
      //console.log('INPUT_CHANGE');
      const { e } = action.payload
      console.log(e.target.value);
      return{
        ...state,
        filterText: e.target.value
      }
      console.log(state.filterText);
    }

    case TIPO_CHANGE:{
      //console.log('INPUT_CHANGE');
      const { e } = action.payload
      console.log(e.target.value);
      return{
        ...state,
        filterTipo: e.target.value
      }
      console.log(state.filterTipo);
    }

    case SAVE_GUITAR:{
      const { values } = action.payload
      console.log(values)
      let newId = null
      const tmp_guitarList = [...state.guitarList];

      if(values.id>0){
        newId = values.id
        //quito el elemento de la lista
        //tmp_guitarList.splice(newId-1,1);

        console.log(tmp_guitarList);

      }else{
        newId = tmp_guitarList.length + 1
      }

      //alert(newId);

      return{
        ...state,
        entities: {
          ...state.entities,
          [newId]: {
            ...values,
            id: newId
          }
        },
        guitarList: [...tmp_guitarList.filter(numero => numero !==newId), newId],
        usingForm: false
      }
    }
    default: return state
  }
}

const initialState = {
  entities: {
    '1': { id: '1', name: 'Strato', foto: 'http://musicopolix.com/blog-musicopolix/wp-content/uploads/2014/06/stratocaster-musicopolix.jpg', marca: 'Fender', tipo:'guitarra'},
    '2': { id: '2', name: 'Telecaster', foto: 'http://musicopolix.com/blog-musicopolix/wp-content/uploads/2014/06/telecaster-musicopolix.jpg', marca: 'Fender', tipo:'guitarra' },
    '3': { id: '3', name: 'Les Paul', foto: 'https://www.thomann.de/blog/wp-content/uploads/2017/09/lpr7tvagnh1_main_hero_01-3.jpg', marca: 'Gibson', tipo:'guitarra'},
    '4': { id: '4', name: 'SemiHollow', foto: 'http://musicopolix.com/blog-musicopolix/wp-content/uploads/2014/06/jazz-musicopolix.jpg', marca: 'Gretsch', tipo:'guitarra'},
    '5': { id: '5', name: 'Precision Bass', foto: 'https://www.musicopolix.com/68912/fender-player-p-bass-pf-sonic-red-bajo-electrico.jpg', marca: 'Fender', tipo:'bajo'},
    '6': { id: '6', name: 'Jazz Bass', foto: 'https://cdn.shopify.com/s/files/1/0183/0329/products/99.jpg', marca: 'Fender',tipo:'bajo'}
  },
  guitarList: ['1', '2', '3', '4', '5', '6'],
  guitarEditing: null,
  filterText: '',
  filterTipo: '',
  guitarEditing:'',
  usingForm: false,
  currentGuitar:null
}
