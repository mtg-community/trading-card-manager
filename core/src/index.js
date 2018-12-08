import {
  counterSelector,
  decrementCounterAction,
  forgotPasswordAction,
  incrementCounterAction,
  loginAction,
  logOutAction,
  selectUser,
  signUpAction,
} from './frameworks/redux/ducks';

export { CounterInteractor, AuthenticationInteractor } from './useCases';
export { ReduxAdapter } from './frameworks/redux/reduxAdapter';
export { configureStore } from './frameworks/redux/store';
export {
  UserCredential,
  User,
  Ruling,
  Legality,
  ForeignName,
  Email,
  Counter,
  Card,
} from './entities';

export const Actions = {
  signIn: loginAction,
  signUp: signUpAction,
  logout: logOutAction,
  forgotPassword: forgotPasswordAction,
  increment: incrementCounterAction,
  decrement: decrementCounterAction,
};

export const Selectors = {
  counter: counterSelector,
  user: selectUser,
};
