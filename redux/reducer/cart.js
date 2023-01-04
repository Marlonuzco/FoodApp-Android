//cart

export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_ONE_TO_CART = 'DELETE_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';
export const INCREMENT_TOTAL_PRICE = 'INCREMENT_TOTAL_PRICE';
export const DECREMENT_TOTAL_PRICE = 'DECREMENT_TOTAL_PRICE';
export const INCREMENT_TOTAL_COUNT = 'INCREMENT_TOTAL_COUNT';

const cart_initial_state = {
  products: [],
  totalCount: [0],
};

const cart = (state = cart_initial_state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      state.products.push(action.item) || state.products.push(action.params);
      return {...state};
    case DELETE_ONE_TO_CART:
      return {
        ...state,
        products: state.products.filter(item => item.id !== action.id),
      };
    case INCREMENT_COUNT:
      let newCounter = [...state.products][action.index];
      newCounter.counter = newCounter.counter + 1;
      return {...state};
    case DECREMENT_COUNT:
      let newCounter2 = [...state.products][action.index];
      newCounter2.counter = newCounter2.counter - 1;
      return {...state};
    case INCREMENT_TOTAL_PRICE:
      let totalPrice = [...state.products][action.index];
      totalPrice.totalPrice = totalPrice.totalPrice + totalPrice.price;
      return {...state};
    case DECREMENT_TOTAL_PRICE:
      let totalPrice2 = [...state.products][action.index];
      totalPrice2.totalPrice = totalPrice2.totalPrice - totalPrice2.price;
      return {...state};
    case INCREMENT_TOTAL_COUNT:
      return {...state};
    default:
      return state;
  }
};

export default cart;
