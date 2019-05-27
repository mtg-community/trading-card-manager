import { Counter, User } from '../../entities';

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
  onError: (error: Error) => void,
};

export type LogOutAction = {
  type: string,
  onSuccess?: () => void,
  onError?: (error: Error) => void,
};

export type SetUserAction = {
  type: string,
  user: User | undefined | null,
};

export type StateType = {
  counter: Counter,
  user?: User,
};

export type UserStateSlice = User | undefined | null;
