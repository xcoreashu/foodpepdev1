import axios from 'axios';
import { FETCH_USER,GET_RESTAURANT,DELETE_RESTAURANT,UPDATE_RESTAURANT,POST_RESTAURANT,ADD_TO_CART,UPDATE_CART,DELETE_CART_ITEM } from './types';


export const fetchUser = () => async dispatch =>  {
const res =   await axios.get('/api/current_user');
   dispatch({ type: FETCH_USER ,payload: res.data });

};

export function getRestaurants(restaurant) {
  return {
    type: "GET_RESTAURANT",
    payload: restaurant
  }
}

export function postRestaurants(restaurant) {
  return function(dispatch) {
    axios.post('/api/restaurants',restaurant)
    .then (function(response){
      dispatch({type: "POST_RESTAURANT",payload:response.data})
    })
    .catch(function(err){
      dispatch({type:"POST_RESTAURANT_REJECTED",payload:"there was an error while posting a new restaurant sorry for the incovenience caused "})
    })
  }
}
export function deleteRestaurants(id) {
  return {
    type: "DELETE_RESTAURANT",
    payload: id
  }
}
  export function updateRestaurants(restaurant) {
    return {
      type: "UPDATE_RESTAURANT",
      payload: restaurant

    }
  }
  export function addToCart(restaurant) {
    return {
      type:"ADD_TO_CART",
      payload: restaurant
    }
  };
  export function updateCart(_id,unit) {
    return {
      type: "UPDATE_CART",
      _id: _id,
      unit: unit
    }
  };
  export function deleteCartItem(cart) {
    return {
      type: "DELETE_CART_ITEM",
      payload: cart


    }
  };
