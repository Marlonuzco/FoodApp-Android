//login
export const AUTH_LOGGED = 'AUTH_LOGGED';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_ERROR = 'AUTH_ERROR';

const auth_initial_state = {
  isLogged: false,
  userInfo: {},
  error: false,
  users: [
    {
      id: 0,
      email: 'xmarlonuzco2002@gmail.com',
      username: 'marlon2002',
      password: '123456',
    },
  ],
};

const auth = (authInfo = auth_initial_state, action) => {
  switch (action.type) {
    case AUTH_LOGGED:
      return {
        ...authInfo,
        isLogged: true,
        userInfo: action.userInfo,
      };
    case AUTH_LOGIN:
      return {
        ...authInfo,
        isLogged: true,
      };
    case AUTH_ERROR:
      return {
        ...authInfo,
        error: true,
      };
    case AUTH_LOGOUT:
      return auth_initial_state;
    default:
      return authInfo;
  }
};
export default auth;
