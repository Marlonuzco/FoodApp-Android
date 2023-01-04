//favorites
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const DELETE_ONE_TO_FAVORITES = 'DELETE_ONE_TO_FAVORITES';
export const BUTON_ADD_TO_FAVORITES = 'BUTON_ADD_TO_FAVORITES';

const favorites_initial_state = {
  items: [],
};

const favorites = (state = favorites_initial_state, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      state.items.push(action.item) || state.items.push(action.params);
      return {...state};
    case DELETE_ONE_TO_FAVORITES:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      };
    case BUTON_ADD_TO_FAVORITES:
      return {...state};
    default:
      return state;
  }
};

export default favorites;
