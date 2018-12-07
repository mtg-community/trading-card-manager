// @flow strict

import type { User } from '../../../entities/user';
import type { LogOutAction, StateType, UserStateSlice } from '../types';
import type {
  SetUserAction,
  AuthUserAction,
  ForgotPasswordAction,
} from '../types';
import { SIGN_IN, SIGN_UP, FORGOT_PASSWORD, LOG_OUT } from '../sagas';

const INITIAL_STATE = null;
const SET_USER = 'user/sync/set';
const SET_USER_LISTENER = 'user/listener/set';

export const loginAction = (
  email: string,
  password: string,
  onError: Error => void,
): AuthUserAction => ({
  type: SIGN_IN,
  email,
  password,
  onError,
});

export const signUpAction = (
  email: string,
  password: string,
  onError: Error => void,
): AuthUserAction => ({
  type: SIGN_UP,
  email,
  password,
  onError,
});

export const logOutAction = (
  onSuccess?: () => void,
  onError?: Error => void,
): LogOutAction => ({
  type: LOG_OUT,
  onSuccess,
  onError,
});

export const forgotPasswordAction = (
  email: string,
  onSuccess: () => void,
  onError: Error => void,
): ForgotPasswordAction => ({
  type: FORGOT_PASSWORD,
  email,
  onSuccess,
  onError,
});

export const selectUser = (state: StateType): ?User => state.user;

export const setUserAction = (user: ?User): SetUserAction => ({
  type: SET_USER,
  user,
});

export const setUserListenerAction = (user: ?User): SetUserAction => ({
  type: SET_USER_LISTENER,
  user,
});

export const userReducer = (
  state: UserStateSlice = INITIAL_STATE,
  action: SetUserAction,
): UserStateSlice => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case SET_USER_LISTENER:
      return action.user;
    default:
      return state;
  }
};
