export const ADD_ORDER = 'ADD_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';
export const INCREMENT_TOTAL_ORDERS = 'INCREMENT_TOTAL_ORDERS';
export const DECREMENT_TOTAL_ORDERS = 'DECREMENT_TOTAL_ORDERS';

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
      state.orders.splice(action.index, 1);
      return {...state};
    case INCREMENT_TOTAL_ORDERS:
      return {
        ...state,
        TotalOrders: state.TotalOrders + 1,
      };
    case DECREMENT_TOTAL_ORDERS:
      return {
        ...state,
        TotalOrders: state.TotalOrders - 1,
      };
    default:
      return state;
  }
};

export default backOrders;
