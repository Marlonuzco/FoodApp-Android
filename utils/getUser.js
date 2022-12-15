import UserIMG from '../src/images/UserImg.png';

import img1 from '../src/images/Imagenes de productos/img1.jpg';
import img2 from '../src/images/Imagenes de productos/img2.jpg';
import img3 from '../src/images/Imagenes de productos/img3.jpg';
import pizzaIcon from '../src/images/iconos/pizza1.png';
import burguerIcon from '../src/images/iconos/burguer1.png';
import tacosIcon from '../src/images/iconos/tacos1.png';
import pastaIcon from '../src/images/iconos/pasta1.png';
import arrozIcon from '../src/images/iconos/arroz2.png';
import hotDogIcon from '../src/images/iconos/hotdog1.png';

export const user = {
  email: 'xmarlonuzco2002@gmail.com',
  username: 'marlon2002',
  password: '123456',
};

export const userDetails = {
  username: 'marlon2002',
  firstname: 'Marlon',
  lastName: 'Uzcátegui',
  email: 'xmarlonuzco2002@gmail.com',
  image: UserIMG,
};

export const Productes = {
  categories: [
    {
      id: 1,
      name: 'Pizzas',
      photo: pizzaIcon,
    },
    {
      id: 2,
      name: 'Burguers',
      photo: burguerIcon,
    },
    {
      id: 3,
      name: 'Hot Dogs',
      photo: hotDogIcon,
    },
    {
      id: 4,
      name: 'Tacos',
      photo: tacosIcon,
    },
    {
      id: 5,
      photo: pastaIcon,
      name: 'Pastas',
    },
    {
      id: 6,
      name: 'Rices',
      photo: arrozIcon,
    },
  ],
  Favorites: [
    {
      id: 1,
      name: 'Hot Dog',
      photo: hotDogIcon,
      description: 'Traditional american Hot Dog',
      price: '10',
    },
    {
      id: 2,
      name: 'Hamburguesa 1',
      photo: burguerIcon,
      description: 'Traditional american burguer',
      price: '20',
    },
    {
      id: 3,
      name: 'Pizza Mamamia',
      photo: pizzaIcon,
      description: 'Traditional italian pizza',
      price: '15',
    },
  ],
};
