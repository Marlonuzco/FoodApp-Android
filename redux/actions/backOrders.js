import {
  ADD_ORDER,
  DELETE_ORDER,
  DECREMENT_TOTAL_ORDERS,
  INCREMENT_TOTAL_ORDERS,
} from '../reducer/backOrders';

export const addOrder = products => ({
  type: ADD_ORDER,
  orders: products,
});

export const deleteOrder = index => ({
  type: DELETE_ORDER,
  index,
});

export const incremenTotalOrders = () => ({
  type: INCREMENT_TOTAL_ORDERS,
});

export const decremenTotalOrders = () => ({
  type: DECREMENT_TOTAL_ORDERS,
});
