const KILL_HERO = 'KILL_HERO'
const PUT_RING = 'PUT_RING'
const INPUT_CHANGE = 'INPUT_CHANGE'
const TOGGLE_FORM = 'TOGGLE_FORM'
const SAVE_HERO = 'SAVE_HERO'

export const killHero = id => {
  console.log('IM BEING CALLED 1')
  return ({
    type: KILL_HERO,
    payload: {
      id
    }
  })
}

export const putRing = id => {
  console.log('FUNCTION PUT_RING')
  return ({
    type: PUT_RING,
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

export const toggleForm = () => {
  return({
    type: TOGGLE_FORM,
    payload:{

    }
  })
}

export const saveHero = (values) => {
  console.log('SAVE_HERO')
  return ({
    type: SAVE_HERO,
    payload: {
      values
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

    case KILL_HERO:{
      console.log('Llego la action', KILL_HERO)
      const { id } = action.payload
      const withoutDeadHero = state.guitarList.filter(heroId => heroId !== id)

      return {
        ...state,
        entities: editEntity(state,id,{status:'dead'}),
        guitarList: [...withoutDeadHero, id]
      }
    }

    case PUT_RING:{
      console.log('usando PUT_RING');
      const { id } = action.payload

      return{
        ...state,
        entities: editEntity(state,id,{status:'using-ring'}),
        heroIdUsingRing:id
      }
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

    case SAVE_HERO:{
      const { values } = action.payload
      console.log(values)
      const newId = state.guitarList.length + 1

      return{
        ...state,
        entities: {
          ...state.entities,
          [newId]: {
            ...values,
            id: newId
          }
        },
        guitarList: [...state.guitarList, newId],
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
    '3': { id: '3', name: 'Les Paul', foto: 'http://musicopolix.com/blog-musicopolix/wp-content/uploads/2014/06/les-paul-musicopolix.jpg', marca: 'Gibson', tipo:'guitarra'},
    '4': { id: '4', name: 'SemiHollow', foto: 'http://musicopolix.com/blog-musicopolix/wp-content/uploads/2014/06/jazz-musicopolix.jpg', marca: 'Gretsch', tipo:'guitarra'},
    '5': { id: '5', name: 'Precision Bass', foto: 'https://www.musicopolix.com/68912/fender-player-p-bass-pf-sonic-red-bajo-electrico.jpg', marca: 'Fender', tipo:'bajo'},
    '6': { id: '6', name: 'Jazz Bass', foto: 'https://cdn.shopify.com/s/files/1/0183/0329/products/99.jpg', marca: 'Fender',tipo:'bajo'}
  },
  guitarList: ['1', '2', '3', '4', '5', '6'],
  heroIdUsingRing: null,
  filterText: '',
  usingForm: false
}
