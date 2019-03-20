// @flow strict

import { Counter } from '../../entities/counter';
import { User } from '../../entities/user';

// eslint-disable-next-line
export type PayloadlessAction = {
  type: string,
};

export type AuthUserAction = {
  type: string,
  email: string,
  password: string,
  onError: (error: Error) => void,
};

export type ForgotPasswordAction = {
  type: string,
  email: string,
  onSuccess: () => void,
  onError: Error => void,
};

export type LogOutAction = {
  onSuccess?: () => void,
  onError?: Error => void,
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
