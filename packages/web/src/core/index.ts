import { Adapter } from './frameworks/redux';

export {
  counterSelector,
  decrementCounterAction,
  incrementCounterAction,
} from './frameworks/redux/ducks/counterReducer';
export {
  selectUser,
  setUserAction,
  setUserListenerAction,
} from './frameworks/redux/ducks/userReducer';

export { CounterInteractor, AuthenticationInteractor } from './useCases';
// export { ReduxAdapter, Adapter } from './frameworks/redux/reduxAdapter';
export * from './frameworks/redux/reduxAdapter';
export { configureStore } from './frameworks/redux/store';
export { User, Email, Counter } from './entities';
export { forgotPasswordAction } from './frameworks/redux/sagas/authentication';
export { logOutAction } from './frameworks/redux/sagas/authentication';
export { signUpAction } from './frameworks/redux/sagas/authentication';
export { loginAction } from './frameworks/redux/sagas/authentication';
