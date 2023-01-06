import {
  SET_INFAVORITES,
  DELETE_TO_INFAVORITES,
  SET_INCART,
  SET_INCART_FALSE,
} from '../reducer/products';

export const setInfavorites = id => {
  return {
    type: SET_INFAVORITES,
    id,
  };
};

export const deleteTofavorites = id => {
  return {
    type: DELETE_TO_INFAVORITES,
    id,
  };
};

export const setInCart = id => {
  return {
    type: SET_INCART,
    id,
  };
};

export const setInCartFalse = id => {
  return {
    type: SET_INCART_FALSE,
    id,
  };
};
