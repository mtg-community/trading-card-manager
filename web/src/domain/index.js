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
  const counterInteractor = new CounterInteractor(-5, 5);
  const authenticationInteractor = new AuthenticationInteractor({
    signOut: signOut,
    signIn: signInWithEmailAndPassword,
    signUp: signUpWithEmailAndPassword,
    resetPassword: sendPasswordResetEmail,
    authStateListener: () => ({}),
  });

  const reduxAdapter = new ReduxAdapter(
    authenticationInteractor,
    counterInteractor,
  );

  const store = configureStore(reduxAdapter);

  return { store };
};
