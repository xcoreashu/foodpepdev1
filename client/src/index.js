//import 'materialize-css/dist/css/materialize.min.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'mdbreact/dist/css/mdb.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore , applyMiddleware } from 'redux';
import logger from 'redux-logger';
import App from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import { postRestaurants,deleteRestaurants,updateRestaurants } from './actions/index.js';
import RestaurantList from './components/RestaurantList';


const middleware = applyMiddleware(logger);
const store = createStore(reducers, {} , applyMiddleware(reduxThunk));
store.subscribe( () => {
  console.log('current state is: ',store.getState());
})
/*store.dispatch(postRestaurants(
[
  {
    id: 1,
    title: 'adda unplugged',
    description: 'good food good times',
    price: '123'
  },
  {
    id: 2,
    title: 'richards kitchen',
    description: 'kiit evergreen charm ',
    price: '456'


  }
]


))
/*
store.dispatch(deleteRestaurants(
  {id:2}
))
store.dispatch(updateRestaurants(
{
  id: 2,
  title: 'chill umm'
}
))
*/

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
) ;
