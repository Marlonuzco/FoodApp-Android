import {SET_INFAVORITES, DELETE_TO_INFAVORITES} from '../reducer/products';

export const setInfavorites = index => {
  return {
    type: SET_INFAVORITES,
    index,
  };
};

export const deleteTofavorites = index => {
  return {
    type: DELETE_TO_INFAVORITES,
    index,
  };
};
