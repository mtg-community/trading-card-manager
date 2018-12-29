import {
  ReduxAdapter,
  AuthenticationInteractor,
  configureStore,
} from 'core';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  signUpWithEmailAndPassword,
} from '../data/firebase/authentication';
import { logRocketMiddleware } from '../data/log-rocket';
import { isProduction } from './services/environment';
import locale from "./redux/ducks/localeReducer";

export const initializeDomainLayer = () => {
  const authenticationInteractor = new AuthenticationInteractor({
    signOut: signOut,
    signIn: signInWithEmailAndPassword,
    signUp: signUpWithEmailAndPassword,
    resetPassword: sendPasswordResetEmail,
  });

  const reduxAdapter = new ReduxAdapter(
    authenticationInteractor,
  );

  const middleware = [];

  if (isProduction()) {
    middleware.push(logRocketMiddleware());
  }

  const store = configureStore(reduxAdapter, middleware, { locale });

  return { store };
};
