export const ADD_ORDER = 'ADD_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';

const back_orders_initial_state = {
  orders: [],
  TotalOrders: 0,
};

const backOrders = (state = back_orders_initial_state, action) => {
  switch (action.type) {
    case ADD_ORDER:
      state.orders.push(action.orders);
      return {...state};
    case DELETE_ORDER:
      return {...state};
    default:
      return state;
  }
};

export default backOrders;
