import { createReducer, createAction, PayloadAction } from 'redux-starter-kit';
import { User } from '../entities';
import { NOT_LOGGED_IN_USER } from '../entities/user';

type AuthActionsType =
  | PayloadAction<User>
  | PayloadAction<boolean>
  | PayloadAction<string>;

type AuthenticationReducerType = (
  state: AuthenticationState,
  action: AuthActionsType,
) => AuthenticationState;

interface AlertType {
  showAlert: boolean;
  message: string;
}

export interface AuthenticationState {
  user: User;
  alert: AlertType;
  isLoading: boolean;
}

export const NO_ALERTS: AlertType = { showAlert: false, message: '' };

export const AUTH_INITIAL_STATE: AuthenticationState = {
  user: NOT_LOGGED_IN_USER,
  alert: NO_ALERTS,
  isLoading: false,
};

export const setLoading = createAction('duck/user/setLoading');
export const updateUser = createAction('duck/user/updateUser');
export const showAlert = createAction('duck/user/showAlert');

export function handleUpdateUser(
  state: AuthenticationState,
  action: PayloadAction<User>,
): AuthenticationState {
  return {
    ...state,
    user: action.payload,
  };
}

export function handleShowAlert(
  state: AuthenticationState,
  action: PayloadAction<string>,
): AuthenticationState {
  return {
    ...state,
    alert: {
      showAlert: true,
      message: action.payload,
    },
  };
}

export function handleSetLoading(
  state: AuthenticationState,
  action: PayloadAction<boolean>,
): AuthenticationState {
  return {
    ...state,
    isLoading: action.payload,
  };
}

export const authenticationReducer: AuthenticationReducerType = createReducer(
  AUTH_INITIAL_STATE,
  {
    [updateUser.type]: handleUpdateUser,
    [showAlert.type]: handleShowAlert,
    [setLoading.type]: handleSetLoading,
  },
);
