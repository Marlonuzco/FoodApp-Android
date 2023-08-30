import {axiosInstance} from '../../axios';
import {
  SEARCH_CATEGORIES,
  SEARCH_PRODUCTS,
  SET_CATEGORIES,
  SET_PRODUCTS,
  ERROR_IN_SEARCH_CATEORIES,
  ERROR_IN_SEARCH_PRODUCTS,
} from '../reducer/products';

const categoriesURL = '/categories';

export const search_categories = token => async dispatch => {
  dispatch({type: SEARCH_CATEGORIES});
  try {
    const response = await axiosInstance.get(categoriesURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      dispatch(set_categories(response.data));
    } else {
      dispatch(error_in_search_categories());
      console.log('error en search_categories');
    }
  } catch (error) {
    dispatch(error_in_search_categories());
    console.log('error en search_categories', error);
  }
};

export const set_categories = data => ({
  type: SET_CATEGORIES,
  categories: data.categories,
});

export const error_in_search_categories = () => ({
  type: ERROR_IN_SEARCH_CATEORIES,
});
