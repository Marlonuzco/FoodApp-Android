import {
  ADD_TO_CART,
  DELETE_ONE_TO_CART,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  DECREMENT_TOTAL_PRICE,
  INCREMENT_TOTAL_PRICE,
  SEND_ORDERS,
  INCREMENT_TOTAL_ITEMS,
  DECREMENT_TOTAL_ITEMS,
} from '../reducer/cart';

export const addToCart = (item, params, index) => {
  return {
    type: ADD_TO_CART,
    item,
    params,
    index,
  };
};

export const removeFromCart = id => {
  return {
    type: DELETE_ONE_TO_CART,
    id,
  };
};

export const incrementCount = index => ({
  type: INCREMENT_COUNT,
  index,
});

export const decrementCount = index => ({
  type: DECREMENT_COUNT,
  index,
});

export const incremenTotalPrice = index => ({
  type: INCREMENT_TOTAL_PRICE,
  index,
});

export const decrementTotalPrice = index => ({
  type: DECREMENT_TOTAL_PRICE,
  index,
});

export const sendOrders = products => ({
  type: SEND_ORDERS,
  products,
});

export const incrementTotalItems = () => ({
  type: INCREMENT_TOTAL_ITEMS,
});

export const decrementTotalItems = () => ({
  type: DECREMENT_TOTAL_ITEMS,
});
