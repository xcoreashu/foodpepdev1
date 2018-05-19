export function cartReducer(state={cart: []}
,action){
  switch (action.type) {
    case "ADD_TO_CART":
    return [...state,...action.payload]
    break;
  }
    return state;


}
