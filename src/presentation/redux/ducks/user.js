// @flow strict

import type { User } from 'react-native-firebase';
import type { StateType, SetUserAction, UserStateSlice } from '../types';

const INITIAL_STATE = null;
const SET_USER = 'user/set';

export const selectUser = (state: StateType): ?User => state.user;

export const setUserAction = (user: User): SetUserAction => ({
  type: SET_USER,
  user,
});

export const userReducer = (
  state: UserStateSlice = INITIAL_STATE,
  action: SetUserAction,
): UserStateSlice => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
};
