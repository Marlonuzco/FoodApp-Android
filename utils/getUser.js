import UserIMG from '../src/images/UserImg.png';

import pizzaIcon from '../src/images/iconos/pizza1.1.png';
import burguerIcon from '../src/images/iconos/burguer1.png';
import tacosIcon from '../src/images/iconos/tacos1.png';
import pastaIcon from '../src/images/iconos/pasta1.png';
import arrozIcon from '../src/images/iconos/arroz2.png';
import hotDogIcon from '../src/images/iconos/hotdog1.png';
import drinkIcon from '../src/images/iconos/drinks.png';

export const users = [
  {
    id: 0,
    email: 'xmarlonuzco2002@gmail.com',
    username: 'marlon2002',
    password: '123456',
    userInfo: {
      username: 'marlon2002',
      firstname: 'Marlon',
      lastName: 'Uzcátegui',
      email: 'xmarlonuzco2002@gmail.com',
      image: UserIMG,
    },
  },
];

export const Products = {
  categories: [
    {
      id: 0,
      name: 'Pizzas',
      photo: pizzaIcon,
      products: [
        {
          id: 1,
          name: 'Pizza Mamamia',
          photo: pizzaIcon,
          description: 'Traditional italian pizza',
          price: 12,
          counter: 1,
          totalPrice: 12,
          inFavorites: false,
        },
        {
          id: 2,
          name: 'Pizza 2',
          price: 14,
          photo: pizzaIcon,
          description:
            'Honolulú pizza with pepperoni and parmesan cheese with pineapple cuts',
          counter: 1,
          totalPrice: 14,
          inFavorites: false,
        },
      ],
    },
    {
      id: 1,
      name: 'Burguers',
      photo: burguerIcon,
      products: [
        {
          id: 3,
          name: 'Burguer 1',
          photo: burguerIcon,
          description: 'Traditional american burguer',
          price: 10,
          counter: 1,
          totalPrice: 10,
          inFavorites: false,
        },
        {
          id: 4,
          name: 'Burguer 2',
          price: 12,
          photo: burguerIcon,
          description: 'Venezuelan Burguer with salad and cheddar cheese',
          counter: 1,
          totalPrice: 12,
          inFavorites: false,
        },
      ],
    },
    {
      id: 2,
      name: 'Hot Dogs',
      photo: hotDogIcon,
      products: [
        {
          id: 5,
          name: 'Hot Dog',
          photo: hotDogIcon,
          description: 'Traditional american Hot Dog',
          price: 8,
          counter: 1,
          totalPrice: 8,
          inFavorites: false,
        },
        {
          id: 6,
          name: 'Hot Dog 2',
          photo: hotDogIcon,
          description: 'Venezuelan hot dog with ketchup and mustad',
          price: 11,
          counter: 1,
          totalPrice: 11,
          inFavorites: false,
        },
      ],
    },
    {
      id: 3,
      name: 'Tacos',
      photo: tacosIcon,
      products: [
        {
          id: 7,
          name: 'Tacos 1',
          photo: tacosIcon,
          description: 'Tacos with meet',
          price: 9,
          counter: 1,
          totalPrice: 9,
          inFavorites: false,
        },
        {
          id: 8,
          name: 'Tacos Mexicans',
          photo: tacosIcon,
          description: 'Traditional mexican tacos',
          price: 13.5,
          counter: 1,
          totalPrice: 13.5,
          inFavorites: false,
        },
      ],
    },
    {
      id: 4,
      photo: pastaIcon,
      name: 'Pastas',
    },
    {
      id: 5,
      name: 'Rices',
      photo: arrozIcon,
    },
    {
      id: 6,
      name: 'Drinks',
      photo: drinkIcon,
    },
  ],
  favorites: [
    {
      id: 9,
      name: 'Hot Dog',
      photo: hotDogIcon,
      description: 'Traditional american Hot Dog',
      price: 8,
      counter: 1,
      totalPrice: 8,
      inFavorites: false,
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
    },
  ],
};
