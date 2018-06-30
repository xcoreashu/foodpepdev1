import { FETCH_ORDER_SUCCESS,COMPLETE_ORDER } from '../actions/types';
export function orderReducer(state = {order: [] }
,action){
  switch(action.type){
    case "FETCH_ORDER_SUCCESS":
    return {...state,
      orders: action.payload

    }
    case "COMPLETE_ORDER":
    return {...state,
      orders: [...state , action.payload]
    }

    default:
    return state;
  }
}
