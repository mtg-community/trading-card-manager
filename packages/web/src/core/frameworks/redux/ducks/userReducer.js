// @flow strict

import type { User } from '../../../entities/user';
import type { SetUserAction, StateType, UserStateSlice } from '../types';

export const INITIAL_STATE = null;
const SET_USER = 'user/sync/set';
const SET_USER_LISTENER = 'user/listener/set';

export const selectUser = (state: StateType): ?User => state.user;

export const setUserAction = (user: ?User = null): SetUserAction => ({
  type: SET_USER,
  user,
});

export const setUserListenerAction = (user: ?User = null): SetUserAction => ({
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
