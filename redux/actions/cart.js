import {
  ADD_TO_CART,
  DELETE_ONE_TO_CART,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
} from '../reducer/cart';

export const addToCart = (item, index) => ({
  type: ADD_TO_CART,
  item,
  index,
});

export const removeFromCart = id => ({
  type: DELETE_ONE_TO_CART,
  id,
});

export const incrementCount = index => ({
  type: INCREMENT_COUNT,
  index,
});

export const decrementCount = index => ({
  type: DECREMENT_COUNT,
  index,
});
