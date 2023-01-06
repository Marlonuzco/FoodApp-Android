//favorites
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const DELETE_ONE_TO_FAVORITES = 'DELETE_ONE_TO_FAVORITES';

const favorites_initial_state = {
  items: [],
};

const favorites = (state = favorites_initial_state, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      state.items.push(action.item || action.params);
      return {...state};
    case DELETE_ONE_TO_FAVORITES:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
};

export default favorites;
