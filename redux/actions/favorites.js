import {ToastAndroid} from 'react-native';
import {axiosInstance} from '../../axios';
import {
  TRY_TO_ADD_TO_FAVORITES,
  ADD_TO_FAVORITES,
  ERROR_TO_ADD_TO_FAVORITES,
  TRY_TO_DELETE_FROM_FAVORITES,
  DELETE_ONE_FROM_FAVORITES,
  ERROR_TO_DELETE_FROM_FAVORITES,
  GET_USER_FAVORITES,
  SET_USER_FAVORITES,
  ERROR_TO_GET_USER_FAVORITES,
} from '../reducer/favorites';

const userFavoritesURL = '/user-favorites';
const userAddProductToFavoritesURL = '/products/user-favorites/add';
const userDeleteProductFromFavoritesURL = '/products/user-favorites/delete';

export const getUserFavorites = (id, token) => async dispatch => {
  dispatch({type: GET_USER_FAVORITES});
  try {
    const response = await axiosInstance.get(`${userFavoritesURL}?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      dispatch(setUserFavorites(response.data.products));
    } else {
      dispatch(errorToGetUserFavorites());
      console.log('Error en getUserFavorites');
    }
  } catch (error) {
    dispatch(errorToGetUserFavorites());
    console.log('Error en getUserFavorites', error);
  }
};

export const setUserFavorites = items => ({
  type: SET_USER_FAVORITES,
  items,
});

export const errorToGetUserFavorites = () => ({
  type: ERROR_TO_GET_USER_FAVORITES,
});

export const tryToAddToFavorites = (valuesToSend, token) => async dispatch => {
  dispatch({type: TRY_TO_ADD_TO_FAVORITES});
  try {
    const response = await axiosInstance.post(
      userAddProductToFavoritesURL,
      valuesToSend,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (response.status === 200) {
      dispatch(addToFavorites(response.data.product));
      ToastAndroid.showWithGravity(
        'Product added succefully to favorites',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    }
  } catch (error) {
    dispatch(errorToAddToFavorites());
    console.log('Error en tryToAddToFavorites', error);
    ToastAndroid.showWithGravity(
      'Error to add this product to favorites',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
  }
};

export const addToFavorites = product => ({
  type: ADD_TO_FAVORITES,
  product,
});

export const errorToAddToFavorites = () => ({
  type: ERROR_TO_ADD_TO_FAVORITES,
});

export const tryToRemoveOneFromFavorites =
  (valuesToSend, token) => async dispatch => {
    dispatch({type: TRY_TO_DELETE_FROM_FAVORITES});
    try {
      const response = await axiosInstance.delete(
        userDeleteProductFromFavoritesURL,
        {
          data: valuesToSend,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.status === 200) {
        dispatch(removeOneFromFavorites(valuesToSend));
        ToastAndroid.showWithGravity(
          'This product has ben remove from favorites',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
        );
      }
    } catch (error) {
      dispatch(errorToRemoveOneFromFavorites());
      console.log('Error en tryToRemoveOneFromFavorites', error);
      ToastAndroid.showWithGravity(
        'Error to delete this product from favorites',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    }
  };

export const removeOneFromFavorites = valuesToDelete => ({
  type: DELETE_ONE_FROM_FAVORITES,
  id: valuesToDelete.product_id,
});

export const errorToRemoveOneFromFavorites = () => ({
  type: ERROR_TO_DELETE_FROM_FAVORITES,
});
