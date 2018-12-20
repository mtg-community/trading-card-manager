import {
  ReduxAdapter,
  AuthenticationInteractor,
  CounterInteractor,
  configureStore,
} from 'core';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  signUpWithEmailAndPassword,
} from '../data/firebase/authentication';

export const initializeDomainLayer = () => {
  ReduxAdapter.authentication = new AuthenticationInteractor({
    signOut: signOut,
    signIn: signInWithEmailAndPassword,
    signUp: signUpWithEmailAndPassword,
    resetPassword: sendPasswordResetEmail,
    authStateListener: () => ({}),
  });
  ReduxAdapter.counter = new CounterInteractor(-5, 5);

  const store = configureStore();

  return { store }
};
