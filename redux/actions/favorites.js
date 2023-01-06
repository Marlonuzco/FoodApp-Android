import {ADD_TO_FAVORITES, DELETE_ONE_TO_FAVORITES} from '../reducer/favorites';

export const addToFavorites = (item, params, index) => {
  return {
    type: ADD_TO_FAVORITES,
    item,
    params,
    index,
  };
};

export const removeOneToFavorites = id => {
  return {
    type: DELETE_ONE_TO_FAVORITES,
    id,
  };
};
