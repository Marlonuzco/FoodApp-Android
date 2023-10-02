import {axiosInstance} from '../../axios';
import {
  SEARCH_CATEGORIES_AND_POPULARS,
  SEARCH_PRODUCTS,
  SET_CATEGORIES_AND_POPULARS,
  SET_PRODUCTS,
  ERROR_IN_SEARCH_CATEORIES_AND_POPULARS,
  ERROR_IN_SEARCH_PRODUCTS,
} from '../reducer/products';

const categoriesAndPopularsURL = '/categories-populars';
const productsCategoriesURL = '/categories-products';

export const search_categories_and_populars = token => async dispatch => {
  dispatch({type: SEARCH_CATEGORIES_AND_POPULARS});
  try {
    const response = await axiosInstance.get(categoriesAndPopularsURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      dispatch(set_categories(response.data));
    } else {
      dispatch(error_in_search_categories());
      console.log('search_categories_and_populars');
    }
  } catch (error) {
    dispatch(error_in_search_categories());
    console.log('search_categories_and_populars', error);
  }
};

export const set_categories = data => ({
  type: SET_CATEGORIES_AND_POPULARS,
  categories: data.categories,
  populars: data.populars,
});

export const error_in_search_categories = () => ({
  type: ERROR_IN_SEARCH_CATEORIES_AND_POPULARS,
});

export const search_products = (id, token) => async dispatch => {
  dispatch({type: SEARCH_PRODUCTS});
  console.log('category_id', id);
  try {
    const response = await axiosInstance.get(
      `${productsCategoriesURL}?category_id=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (response.status === 200) {
      dispatch(set_products(response.data));
    } else {
      dispatch(error_in_search_products());
      console.log('error en search_products');
    }
  } catch (error) {
    dispatch(error_in_search_products());
    console.log('error en search products', error);
  }
};

export const set_products = data => ({
  type: SET_PRODUCTS,
  products: data.products,
});

export const error_in_search_products = () => ({
  type: ERROR_IN_SEARCH_PRODUCTS,
});
