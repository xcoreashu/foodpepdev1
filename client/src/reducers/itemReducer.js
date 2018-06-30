import { GET_ITEM , POST_ITEM,DELETE_ITEM,UPDATE_ITEM } from '../actions/types';

export function itemReducer(state = { item: [

] },action) {
  switch(action.type) {
    case "GET_ITEM":
  return {...state , items:[ action.payload ]}
  break;
  case "POST_ITEM":
  return {...state, items:[...state.items,...action.payload]}
  break;
  case "POST_ITEM_REJECTED":
  return {...state}
  break;
  case "DELETE_ITEM":
  /* create a copy of the current array of items */
  const currentItemToDelete = [...state.items]
  /* determine at which index in the index array the item is to be deleted */
  const indexToDelete = currentItemToDelete.findIndex(
     function(item) {
       return item._id === action.payload
     }
  )
  /* use slice to remove item at a particular index to delete */
  return[items: [...currentItemToDelete.slice(0,indexToDelete),...currentItemToDelete.slice(0,indexToDelete + 1)]]
  break;
  case "UPDATE_ITEM":
  /* Create a copy of current aray of items */
  const currentItemToUpdate = [...state.items]
  /*  determine at which index in the index array the item is to be updated */
  const indextToUpdate = currentItemToUpdate.findIndex(
    function(item) {
      return item._id === action.payload
    }
  )
  /* create a new restaurant object with the new values with the same array index of the item we want to replace */
  const newItemToUpdate = {
    ...currentItemToUpdate[indexToUpdate],
    title: action.payload.title

  }
  console.log("WHat is new item to update",newItemToUpdate);
    /* use slice to remove the item at the specified index, replace with the new object and concatenate with the rest of items in the array */
  return {items:[ ...currentItemsToUpdate],newItemToUpdate , [...currentItemToUpdate.slice(0,indexToUpdate + 1)]}
  break;

  }
  return state;

}
