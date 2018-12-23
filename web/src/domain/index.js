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

  const middleware = [logRocketMiddleware()];
  const store = configureStore(reduxAdapter, middleware);

  return { store };
};
