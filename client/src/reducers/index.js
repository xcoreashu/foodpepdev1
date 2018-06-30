import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import {restaurantReducer} from './restaurantReducer';
import {cartReducer} from './cartReducer';
import {orderReducer} from './orderReducer';

export default combineReducers({
  // key and value
  auth: authReducer,
  restaurants: restaurantReducer,
  cart: cartReducer,
  form: reduxForm
});
