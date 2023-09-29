//cart
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_ONE_TO_CART = 'DELETE_TO_CART';
export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';

const cart_initial_state = {
  products: [],
  totalItems: 0,
};

const cart = (state = cart_initial_state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      state.products.push(action.item);
      return {
        ...state,
        totalItems: state.totalItems + 1,
      };
    case DELETE_ONE_TO_CART:
      return {
        ...state,
        products: state.products.filter(item => item.id !== action.id),
        totalItems: state.totalItems - 1,
      };
    case INCREMENT_COUNT:
      let newValues = [...state.products][action.index];
      let total_price = parseFloat(newValues.total_price);
      let price = parseFloat(newValues.price);
      newValues.counter = newValues.counter + 1;
      newValues.total_price = total_price + price;
      newValues.total_price = newValues.total_price;
      return {...state};
    case DECREMENT_COUNT:
      let newValues2 = [...state.products][action.index];
      let total_price2 = parseFloat(newValues2.total_price);
      let price2 = parseFloat(newValues2.price);
      if (newValues2.counter > 1) {
        newValues2.counter = newValues2.counter - 1;
        newValues2.total_price = total_price2 - price2;
        newValues2.total_price = newValues2.total_price;
      }
      return {...state};
    default:
      return state;
  }
};

export default cart;
