import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  // key and value
  auth: authReducer
});
