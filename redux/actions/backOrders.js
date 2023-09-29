import {ADD_ORDER, DELETE_ORDER} from '../reducer/backOrders';

export const addOrder = products => ({
  type: ADD_ORDER,
  orders: products,
});

export const deleteOrder = index => ({
  type: DELETE_ORDER,
  index,
});
