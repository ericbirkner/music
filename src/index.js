import React from 'react';
import ReactDOM from 'react-dom';
import GuitarContainer from './containers/GuitarContainer';
import NavBar from './components/NavBar';
import GuitarInfo from './components/GuitarInfo';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducers'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const store = createStore(reducer)

const Root = () => (
  <Provider store={store}>
    <Router>
      <NavBar/>
      <Route exact path="/" component={GuitarContainer} />
      <Route path="/guitar/:guitarId" component={GuitarInfo} />
    </Router>
  </Provider>
)


ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
