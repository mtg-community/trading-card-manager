import { AuthenticationInteractor, configureStore, ReduxAdapter } from 'core';
import { logRocketMiddleware } from '../../data/log-rocket';
import { isProduction } from '../services/environment';
import locale from './ducks/localeReducer';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  signUpWithEmailAndPassword,
} from '../../data/firebase/authentication';

let store = {};

export const createStore = () => {
  const adapter = initializeReduxAdapter();
  const reducers = { locale };
  const middleware = [];

  if (isProduction()) {
    middleware.push(logRocketMiddleware());
  }

  store = configureStore(adapter, middleware, reducers);

  return store;
};

export const dispatch = action => store.dispatch(action);

export const select = selector => selector(store.getState());

function initializeReduxAdapter() {
  const authenticationInteractor = new AuthenticationInteractor({
    signOut: signOut,
    signIn: signInWithEmailAndPassword,
    signUp: signUpWithEmailAndPassword,
    resetPassword: sendPasswordResetEmail,
  });

  return new ReduxAdapter(authenticationInteractor);
}
