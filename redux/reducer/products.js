//CATEGORIES
export const SEARCH_CATEGORIES_AND_POPULARS = 'SEARCH_CATEGORIES_AND_POPULARS';
export const SET_CATEGORIES_AND_POPULARS = 'SET_CATEGORIES_AND_POPULARS';
export const ERROR_IN_SEARCH_CATEORIES_AND_POPULARS =
  'ERROR_IN_SEARCH_CATEORIES_AND_POPULARS';
//PRODUCTS
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ERROR_IN_SEARCH_PRODUCTS = 'ERROR_IN_SEARCH_PRODUCTS';
//SET IN CART STATE OF A POPULAR PRODUCT
export const SET_IN_CART_STATE = 'SET_IN_CART_STATE';

const products_initial_state = {
  isSearching: false,
  isSearchingProducts: false,
  products: [],
  categories: [],
  populars: [],
  error: false,
  errorSearchProducts: false,
};

const products = (state = products_initial_state, action) => {
  switch (action.type) {
    case SEARCH_CATEGORIES_AND_POPULARS:
      return {
        ...state,
        isSearching: true,
        categories: [],
        populars: [],
        error: false,
      };
    case SET_CATEGORIES_AND_POPULARS:
      return {
        ...state,
        isSearching: false,
        categories: action.categories,
        populars: action.populars,
        error: false,
      };
    case ERROR_IN_SEARCH_CATEORIES_AND_POPULARS:
      return {
        ...state,
        isSearching: false,
        categories: [],
        populars: [],
        error: true,
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        isSearchingProducts: true,
        products: [],
        errorSearchProducts: false,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        isSearchingProducts: false,
        products: action.products,
        errorSearchProducts: false,
      };
    case ERROR_IN_SEARCH_PRODUCTS:
      return {
        ...state,
        isSearchingProducts: false,
        products: [],
        errorSearchProducts: true,
      };
    default:
      return state;
  }
};

export default products;
