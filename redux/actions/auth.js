import {axiosInstance} from '../../axios';
import {
  AUTH_LOGGED,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  CREATE_NEW_USER,
  SEND_NEW_USER,
  ERROR_TO_CREATE_NEW_USER,
} from '../reducer/auth';

const createNewuserURL = '/login/createnewuser';
const loginURL = '/login/user';

//Login
export const setSession = data => ({
  type: AUTH_LOGGED,
  userInfo: data.userInfo,
  token: data.token,
});

export const login = formValues => async dispatch => {
  dispatch({type: AUTH_LOGIN});
  try {
    const response = await axiosInstance.post(loginURL, formValues);
    if (response.status === 200) {
      dispatch(setSession(response.data));
    } else {
      dispatch(login_error());
      console.log('Error in login');
    }
  } catch (error) {
    dispatch(login_error());
    console.log('Error in login', error);
  }
};

export const login_error = () => ({
  type: AUTH_ERROR,
});

//Sign Up
export const create_new_user = data => ({
  type: CREATE_NEW_USER,
  userInfo: data.userInfo,
  token: data.token,
});

export const send_new_user = formValues => async dispatch => {
  dispatch({type: SEND_NEW_USER});
  try {
    const response = await axiosInstance.post(createNewuserURL, formValues);
    if (response.status === 200) {
      dispatch(create_new_user(response.data));
    } else {
      dispatch(error_to_create_new_user());
    }
  } catch (error) {
    console.log('Error en send new user ', error);
    dispatch(error_to_create_new_user());
  }
};

export const error_to_create_new_user = () => ({
  type: ERROR_TO_CREATE_NEW_USER,
});

//Log out
export const logout = () => ({
  type: AUTH_LOGOUT,
});
