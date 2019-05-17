import React from 'react';
import ReactDOM from 'react-dom';
import GuitarContainer from './containers/GuitarContainer';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducers'

const store = createStore(reducer)

const Root = () => (
  <Provider store={store}>
    <GuitarContainer />
  </Provider>
)


ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
