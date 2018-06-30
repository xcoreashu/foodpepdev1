import axios from 'axios';
import { FETCH_USER,GET_RESTAURANT,DELETE_RESTAURANT,UPDATE_RESTAURANT,POST_RESTAURANT,ADD_TO_CART,UPDATE_CART,DELETE_CART_ITEM,GET_ITEM,POST_ITEM,DELETE_ITEM,UPDATE_ITEM,FETCH_ORDER_SUCCESS,COMPLETE_ORDER,RESET_BUTTON } from './types';


export const fetchUser = () => async dispatch =>  {
const res =   await axios.get('/api/current_user');
   dispatch({ type: FETCH_USER ,payload: res.data });

};

export function getRestaurants() {
  return function(dispatch) {
    axios.get('/api/restaurants')
    .then(function(response){
      dispatch({type: "GET_RESTAURANT",payload:response.data})
    })
    .catch(function(err){
      dispatch({type: "GET_RESTAURANT_REJECTED",payload:err})
    })
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
  return function(dispatch) {
    axios.delete('/api/restaurants' + id)
    .then (function(response){
      dispatch({type: "DELETE_RESTAURANT",payload:id})
    })
    .catch(function(err){
      dispatch({type: "DELETE_RESTAURANT_REJECTED",payload:err})
    })
  }
}
  export function updateRestaurants(restaurant) {
    return {
      type: "UPDATE_RESTAURANT",
      payload: restaurant

    }
  }

export function getItems() {
  return function(dispatch) {
    axios.get('/api/items')
    .then(function(response){
      dispatch({type: "GET_ITEM",payload:response.data })
    })
    .catch(function(err){
      dispatch({type: "GET_ITEM_REJECTED",payload: err})
    })
  }
}

export function postItems(item) {
  return function(dispatch) {
    axios.post('/api/items', item)
    .then(function(response){
      dispatch({type: "POST_ITEM",payload:response.data })
    })
    .catch(function(err){
      dispatch({type:"POST_ITEM_REJECTED",payload: "There was an error for posting a new item for the restaurant"})
    })
  }
}
export function deleteItems(id) {
  return function(dispatch){
    axios.delete('/api/items' + id)
    .then(function(response){
      dispatch({type: "DELETE_ITEM",payload: id})

    })
    .catch(function(err){
      dispatch({type: "DELETE_ITEM_REJECTED",payload: err})
    })
  }
}

export function updateItems(item){
  return {
    type: "UPDATE_ITEM",
    payload: item
  }
}


  export function getCart(){
    return function(dispatch){
      axios.get('/api/cart')
      .then(function(response){
        dispatch({type:"GET_CART",payload:response.data})
      })
      .catch(function(err){
        dispatch({type: "GET_CART_REJECTED",msg:'error when getting the cart from the session'})
      })
    }
  };
  export function addToCart(cart) {
    return function(dispatch) {
axios.post('/api/cart',cart)
.then(function(response){
  dispatch({type: "ADD_TO_CART",payload:response.data})
})
.catch(function(err){
  dispatch({type: "ADD_TO_CART_rejected",payload:err})
})
    }
  }
  export function updateCart(_id,unit,cart) {
    //create a copy of the current array of restaurants
    const currentRestaurantToUpdate = cart
    // Determine at which index in books array is the restaurant to be deleted
    const indexToUpdate = currentRestaurantToUpdate.findIndex(function(restaurant)
  {
    return restaurant._id === _id;
  }
)
// create a new restaurant object with the new values with the same array index of the item we ant to replace

const newRestaurantToUpdate = {...currentRestaurantToUpdate[indexToUpdate],
  quantity:currentRestaurantToUpdate[indexToUpdate].quantity + unit


}

let cartUpdate = [...currentRestaurantToUpdate.slice(0,indexToUpdate),
newRestaurantToUpdate,...currentRestaurantToUpdate.slice(indexToUpdate + 1)
]
    return function(dispatch) {
      axios.post('/api/cart',cartUpdate)
      .then(function(response){
        dispatch({type:"UPDATE_CART",payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"UPDATE_CART_REJECTED",msg:'error when adding to the cart'})
      })
    }
  };
  export function deleteCartItem(cart) {
return function (dispatch) {
  axios.post("/api/cart",cart)
  .then(function(response){
    dispatch({type:"DELETE_CART_ITEM",payload:response.data})
  })
  .catch(function(err){
    dispatch({type:"DELETE_CART_ITEM_REJECTED",msg: 'error when deleting the item from the cart'})
  })
}


    }

export function postCart(cart) {
  return function (dispatch) {
    axios.post('/api/cart',cart)
    .then(function(response){
      dispatch({type: "POST_CART",payload:response.data})
    })
    .catch(function(err){
      dispatch({type: "POST_CART_REJECTED",msg: 'error when posting the item from the cart'})
    })
  }
}

    export function fetchOrders(){
      return function(dispatch) {
        axios.get('/api/orders')
        .then(function(response){
dispatch({type: "FETCH_ORDER_SUCCESS",payload:response.data})

        })
        .catch(function(err){
          dispatch({type: "FETCH_ORDER_ERROR",payload:err})
        })
      }

    }


  export function completeOrders(orders){
    return function(dispatch) {
      axios.post('/api/orders',orders)
      .then(function(response){
        dispatch({
          type: "COMPLETE_ORDER",payload:response.data})

      })
      .catch(function(err){
        dispatch({type: "COMPLETE_ORDER_REJECTED",payload:err })
      })
    }
  }

  export function resetButton(){
    return {
      type: "RESET_BUTTON"
    }
  }
