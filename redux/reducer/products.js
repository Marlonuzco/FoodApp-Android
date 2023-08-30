//CATEGORIES
export const SEARCH_CATEGORIES = 'SEARCH_CATEGORIES';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const ERROR_IN_SEARCH_CATEORIES = 'ERROR_IN_SEARCH_CATEORIES';
//PRODUCTS
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ERROR_IN_SEARCH_PRODUCTS = 'ERROR_IN_SEARCH_PRODUCTS';

const products_initial_state = {
  isSearching: false,
  categories: [],
  products: [],
  populars: [],
  error: false,
};

const products = (state = products_initial_state, action) => {
  switch (action.type) {
    case SEARCH_CATEGORIES:
      return {
        ...state,
        isSearching: true,
        categories: [],
        error: false,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        isSearching: false,
        categories: action.categories,
        error: false,
      };
    case ERROR_IN_SEARCH_CATEORIES:
      return {
        ...state,
        isSearching: false,
        categories: [],
        error: true,
      };
    default:
      return state;
  }
};

export default products;
