//favorites
export const GET_USER_FAVORITES = 'GET_USER_FAVORITES';
export const SET_USER_FAVORITES = 'SET_USER_FAVORITES';
export const ERROR_TO_GET_USER_FAVORITES = 'ERROR_TO_GET_USER_FAVORITES';
export const TRY_TO_ADD_TO_FAVORITES = 'TRY_TO_ADD_TO_FAVORITES';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const ERROR_TO_ADD_TO_FAVORITES = 'ERROR_TO_ADD_TO_FAVORITES';
export const TRY_TO_DELETE_FROM_FAVORITES = 'TRY_TO_DELETE_FROM_FAVORITES';
export const DELETE_ONE_FROM_FAVORITES = 'DELETE_ONE_FROM_FAVORITES';
export const ERROR_TO_DELETE_FROM_FAVORITES = 'ERROR_TO_DELETE_FROM_FAVORITES';

const favorites_initial_state = {
  items: [],
  sendingData: false,
  searchingData: false,
  errorToSendData: false,
  error: false,
};

const favorites = (state = favorites_initial_state, action) => {
  switch (action.type) {
    case GET_USER_FAVORITES:
      return {
        ...state,
        items: [],
        searchingData: true,
        error: false,
      };
    case SET_USER_FAVORITES:
      return {
        ...state,
        items: action.items,
        searchingData: false,
        error: false,
      };
    case ERROR_TO_GET_USER_FAVORITES:
      return {
        ...state,
        items: [],
        searchingData: false,
        error: true,
      };
    case TRY_TO_ADD_TO_FAVORITES:
      return {
        ...state,
        items: state.items,
        sendingData: true,
        errorToSendData: false,
      };
    case ADD_TO_FAVORITES:
      const updatedItems = [...state.items, action.product];
      return {
        ...state,
        items: updatedItems,
        sendingData: false,
        errorToSendData: false,
      };
    case ERROR_TO_ADD_TO_FAVORITES:
      return {
        ...state,
        items: state.items,
        sendingData: false,
        errorToSendData: true,
      };
    case TRY_TO_DELETE_FROM_FAVORITES:
      return {
        ...state,
        items: state.items,
        sendingData: true,
        errorToSendData: false,
      };
    case DELETE_ONE_FROM_FAVORITES:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
        sendingData: false,
        errorToSendData: false,
      };
    case ERROR_TO_DELETE_FROM_FAVORITES:
      return {
        ...state,
        items: state.items,
        sendingData: false,
        errorToSendData: true,
      };
    default:
      return state;
  }
};

export default favorites;
