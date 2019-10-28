import {
  createReducer,
  createAction,
  PayloadAction,
  Reducer,
} from 'redux-starter-kit';
import { User } from '../entities';
import { NOT_LOGGED_IN_USER } from '../entities/user';
import { MTGState } from '../DomainLayer';

export type AuthActionsType =
  | PayloadAction<User>
  | PayloadAction<boolean>
  | PayloadAction<string>;

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

export const authSelector = (state: MTGState): AuthenticationState =>
  state.authentication;

export const setLoading = createAction<boolean>('duck/user/setLoading');
export const updateUser = createAction<User>('duck/user/updateUser');
export const showAlert = createAction<string>('duck/user/showAlert');

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

export const authenticationReducer: Reducer<
  AuthenticationState,
  AuthActionsType
> = createReducer(AUTH_INITIAL_STATE, {
  [updateUser.type]: handleUpdateUser,
  [showAlert.type]: handleShowAlert,
  [setLoading.type]: handleSetLoading,
});
