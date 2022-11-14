import UserIMG from '../src/images/UserImg.png';

import {img1} from '../src/images/Imagenes de productos/img1.jpg';
import {img2} from '../src/images/Imagenes de productos/img2.jpg';
import {img3} from '../src/images/Imagenes de productos/img3.jpg';

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

export const Productes = [
  {
    id: 1,
    name: 'Pizza Mamamia',
    description:
      'Pizza a la plancha, con salsa de tomate de vino tinto, queso mozarella, tocineta ahumada, cerdo asado, tomates cherrys marinados en  aceite de ajo, y oregano y finas hiervas exparcidas',
    photo: img2,
  },
  {
    id: 2,
    name: 'Tacos',
    description:
      'Pizza a la plancha, con salsa de tomate de vino tinto, queso mozarella, tocineta ahumada, cerdo asado, tomates cherrys marinados en  aceite de ajo, y oregano y finas hiervas exparcidas',
    photo: img1,
  },
  {
    id: 3,
    name: 'Hamburguesa',
    description:
      'Pizza a la plancha, con salsa de tomate de vino tinto, queso mozarella, tocineta ahumada, cerdo asado, tomates cherrys marinados en  aceite de ajo, y oregano y finas hiervas exparcidas',
    photo: img3,
  },
];
