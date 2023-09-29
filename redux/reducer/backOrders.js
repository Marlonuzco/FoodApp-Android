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
      return {
        ...state,
        TotalOrders: state.TotalOrders + 1,
      };
    case DELETE_ORDER:
      state.orders.splice(action.index, 1);
      return {
        ...state,
        TotalOrders: state.TotalOrders - 1,
      };
    default:
      return state;
  }
};

export default backOrders;
