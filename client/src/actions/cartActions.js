import { ADD_TO_CART } from './types';

export function addToCart(restaurant) {
  return {
    type:"ADD_TO_CART",
    payload: restaurant
  }
};
