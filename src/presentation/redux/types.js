// @flow

import { User } from 'react-native-firebase';

export type ActionType = PayloadlessAction;

export type ReducerType = {
  [string]: (number) => number,
};
export type PayloadlessAction = {
  type: string,
};

export type SetUserAction = {
  type: string,
  user: User,
};

export type StateType = {
  counter: number,
  user: ?User,
};

export type UserStateSlice = ?User;
export type CounterStateSlice = number;
