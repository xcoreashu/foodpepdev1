import { ADD_TO_CART,UPDATE_CART,DELETE_CART_ITEM } from '../actions/types';
export function cartReducer(state={cart: []}
,action){
  switch (action.type) {
    case "ADD_TO_CART":
    return {
      cart:[...state,...action.payload],
      totalAmount:totals(action.payload).amount,
      totalQty:totals(action.payload).qty
    }
    break;
    case "DELETE_CART_ITEM":
    return {
      cart:[...state,...action.payload],
      totalAmount:totals(action.payload).amount,
      totalQty:totals(action.payload).qty
    }
    break;

    case "UPDATE_CART":
    //create a copy of the current array of restaurants
    const currentRestaurantToUpdate =  [...state.cart]
    // Determine at which index in books array is the restaurant to be deleted
    const indexToUpdate = currentRestaurantToUpdate.findIndex(function(restaurant)
  {
    return restaurant._id === action._id
  }
)
// create a new restaurant object with the new values with the same array index of the item we ant to replace

const newRestaurantToUpdate = {...currentRestaurantToUpdate[indexToUpdate],
  quantity:currentRestaurantToUpdate[indexToUpdate].quantity + action.unit


}

let cartUpdate = [...currentRestaurantToUpdate.slice(0,indexToUpdate),
newRestaurantToUpdate,...currentRestaurantToUpdate.slice(indexToUpdate + 1)
]
return {
  ...state,
  cart: cartUpdate,
  totalAmount:totals(cartUpdate).amount,
  totalQty:totals(cartUpdate).qty
}
break;

default:

    return state;


}
}
//calculate totals
export function totals(payloadArr){
  const totalAmount = payloadArr.map(function(cartArr){
    return cartArr.price * cartArr.quantity;
  }).reduce(function(a,b){
    return a + b;
  },0);  //startingsumming from index0
  const totalQty = payloadArr.map(function(qty){
    return qty.quantity;
  }).reduce(function(a,b){
    return a + b;
  },0);
  return {amount:totalAmount.toFixed(2),
  qty:totalQty}
}
