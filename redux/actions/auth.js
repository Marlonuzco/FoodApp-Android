import {AUTH_LOGGED, AUTH_LOGIN, AUTH_LOGOUT} from '../reducer/auth';

export const setSession = userInfo => ({
  type: AUTH_LOGGED,
  userInfo: {},
  user: {},
});

export const login = () => ({
  type: AUTH_LOGIN,
});

export const logout = () => ({
  type: AUTH_LOGOUT,
});
