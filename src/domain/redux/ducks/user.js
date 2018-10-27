// @flow strict

import { type User } from 'react-native-firebase';
import type {
  StateType,
  UserStateSlice,
} from '../../../../domain/adapters/redux/types';
import type {
  ActionType,
  SetUserAction,
  AuthUserAction,
  ForgotPasswordAction,
} from '../types';
import { SIGN_IN, SIGN_UP, FORGOT_PASSWORD, LOG_OUT } from '../sagas/index';

const INITIAL_STATE = null;
const SET_USER = 'user/sync/set';
const SET_USER_LISTENER = 'user/listener/set';

export const loginAction = (
  email: string,
  password: string,
): AuthUserAction => ({
  type: SIGN_IN,
  email,
  password,
});

export const signUpAction = (
  email: string,
  password: string,
): AuthUserAction => ({
  type: SIGN_UP,
  email,
  password,
});

export const logOutAction = (): ActionType => ({
  type: LOG_OUT,
});

export const forgotPasswordAction = (email: string): ForgotPasswordAction => ({
  type: FORGOT_PASSWORD,
  email,
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
