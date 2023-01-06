import hotDogIcon from '../../src/images/iconos/hotdog1.png';
import burguerIcon from '../../src/images/iconos/burguer1.png';
import pizzaIcon from '../../src/images/iconos/pizza1.png';
import tacosIcon from '../../src/images/iconos/tacos1.png';

//products
export const SET_INFAVORITES = 'SET_INFAVORITES';
export const DELETE_TO_INFAVORITES = 'DELETE_TO_INFAVORITES';
export const SET_INCART = 'SET_INCART';
export const SET_INCART_FALSE = 'SET_INCART_FALSE';

const products_initial_state = {
  Favorites: [
    {
      id: 9,
      name: 'Hot Dog',
      photo: hotDogIcon,
      description: 'Traditional american Hot Dog',
      price: 8,
      counter: 1,
      totalPrice: 8,
      inFavorites: false,
      inCart: false,
    },
    {
      id: 10,
      name: 'Burguer 1',
      photo: burguerIcon,
      description: 'Traditional american burguer',
      price: 10,
      counter: 1,
      totalPrice: 10,
      inFavorites: false,
      inCart: false,
    },
    {
      id: 11,
      name: 'Pizza Mamamia',
      photo: pizzaIcon,
      description: 'Traditional italian pizza',
      price: 12,
      counter: 1,
      totalPrice: 12,
      inFavorites: false,
      inCart: false,
    },
    {
      id: 12,
      name: 'Tacos Mexicans',
      photo: tacosIcon,
      description: 'Traditional mexican tacos',
      price: 13.5,
      counter: 1,
      totalPrice: 13.5,
      inFavorites: false,
      inCart: false,
    },
  ],
};

const products = (state = products_initial_state, action) => {
  switch (action.type) {
    case SET_INFAVORITES:
      state.Favorites.map(i => {
        if (action.id === i.id) {
          let newValue = i;
          newValue.inFavorites = newValue.inFavorites = true;
        }
      });
      return {...state};
    case DELETE_TO_INFAVORITES:
      state.Favorites.map(i => {
        if (action.id === i.id) {
          let newValue = i;
          newValue.inFavorites = newValue.inFavorites = false;
        }
      });
      return {...state};
    case SET_INCART:
      state.Favorites.map(i => {
        if (action.id === i.id) {
          let newValue = i;
          newValue.inCart = newValue.inCart = true;
        }
      });
      return {...state};
    case SET_INCART_FALSE:
      state.Favorites.map(i => {
        if (action.id === i.id) {
          let newValue = i;
          newValue.inCart = newValue.inCart = false;
        }
      });
      return {...state};
    default:
      return state;
  }
};

export default products;
