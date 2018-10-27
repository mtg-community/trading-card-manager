// @flow strict

import { Counter } from '../../entities/counter';
import { User } from '../../entities/user';

export type ActionType = PayloadlessAction;

export type PayloadlessAction = {
  type: string,
};

export type AuthUserAction = {
  type: string,
  email: string,
  password: string,
};

export type ForgotPasswordAction = {
  type: string,
  email: string,
};

export type ReducerType = {
  [string]: (number) => number,
};

export type SetUserAction = {
  type: string,
  user: ?User,
};

export type StateType = {
  counter: Counter,
  user: ?User,
};

export type UserStateSlice = ?User;
export type CounterStateSlice = Counter;
