//login
export const AUTH_LOGGED = 'AUTH_LOGGED';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_ERROR = 'AUTH_ERROR';

//create new user
export const CREATE_NEW_USER = 'CREATE_NEW_USER ';
export const SEND_NEW_USER = 'SEND_NEW_USER';
export const ERROR_TO_CREATE_NEW_USER = 'ERROR_TO_CREATE_NEW_USER';

const auth_initial_state = {
  token: null,
  userInfo: {},
  error: false,
  isFetching: false,
  isLogged: false,
  userCreate: false,
  userNameExist: false,
  NewUserError: false,
};

const auth = (authInfo = auth_initial_state, action) => {
  switch (action.type) {
    case AUTH_LOGGED:
      return {
        ...authInfo,
        isFetching: false,
        isLogged: true,
        userInfo: action.userInfo,
        token: action.token,
        error: false,
      };
    case AUTH_LOGIN:
      return {
        ...authInfo,
        isFetching: true,
        isLogged: false,
        userInfo: {},
        token: null,
        error: false,
      };
    case AUTH_ERROR:
      return {
        ...authInfo,
        isFetching: false,
        isLogged: false,
        userInfo: {},
        token: null,
        error: true,
      };
    case CREATE_NEW_USER:
      return {
        ...authInfo,
        isFetching: false,
        isLogged: true,
        userInfo: action.userInfo,
        userCreate: true,
        userNameExist: false,
        NewUserError: false,
        token: action.token,
      };
    case SEND_NEW_USER:
      return {
        ...authInfo,
        isFetching: true,
        isLogged: false,
        userInfo: {},
        userCreate: false,
        userNameExist: false,
        NewUserError: false,
        token: null,
      };
    case ERROR_TO_CREATE_NEW_USER:
      return {
        ...authInfo,
        isFetching: false,
        isLogged: false,
        userInfo: {},
        userCreate: false,
        userNameExist: false,
        NewUserError: true,
        token: null,
      };
    case AUTH_LOGOUT:
      return auth_initial_state;
    default:
      return authInfo;
  }
};
export default auth;
