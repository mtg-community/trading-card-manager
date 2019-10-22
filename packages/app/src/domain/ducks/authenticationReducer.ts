import { createReducer, createAction } from 'redux-starter-kit';
import { User } from '../entities';
import { Store } from '../index';

export interface AuthenticationState {
  user: User;
  alerts: {
    showAlert: boolean,
    message: string,
  };
  isLoading: boolean;
}

export const NO_ALERTS = { showAlert: false, message: '' };

export const NOT_LOGGED_IN = {
  id: null,
};

export const USER_INITIAL_STATE = {
  user: NOT_LOGGED_IN,
  alerts: NO_ALERTS,
  isLoading: false,
};

export const authSelector = (state: Store) => state.authentication;

export const setLoading = createAction('duck/user/setLoading');
export const updateUser = createAction('duck/user/updateUser');
export const showAlert = createAction('duck/user/showAlert');
export const signIn = createAction('saga/user/signIn');
export const signUp = createAction('saga/user/signUp');
export const signOut = createAction('saga/user/signOut');

export const handleUpdateUser = (state: AuthenticationState, { payload }) => ({
  ...state,
  user: payload,
});

export const handleShowAlert = (state: AuthenticationState, { payload }) => ({
  ...state,
  alerts: {
    showAlert: true,
    message: payload,
  },
});

export const handleSetLoading = (state: AuthenticationState, { payload }) => ({
  ...state,
  isLoading: payload,
});

export const authenticationReducer = createReducer(USER_INITIAL_STATE, {
  [updateUser.toString()]: handleUpdateUser,
  [showAlert.toString()]: handleShowAlert,
  [setLoading.toString()]: handleSetLoading,
});
