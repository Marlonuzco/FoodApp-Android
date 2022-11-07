export const AUTH_LOGGED = 'AUTH_LOGGED';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

const auth_initial_state = {
  isLogged: false,
  userInfo: {},
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
    case AUTH_LOGOUT:
      return auth_initial_state;
    default:
      return authInfo;
  }
};

export default auth;
