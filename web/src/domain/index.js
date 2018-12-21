import {
  ReduxAdapter,
  AuthenticationInteractor,
  configureStore,
} from 'core';
import {
  onAuthStateChanged, sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  signUpWithEmailAndPassword,
} from '../data/firebase/authentication';

export const initializeDomainLayer = () => {
  const authenticationInteractor = new AuthenticationInteractor({
    signOut: signOut,
    signIn: signInWithEmailAndPassword,
    signUp: signUpWithEmailAndPassword,
    resetPassword: sendPasswordResetEmail,
    authStateListener: onAuthStateChanged,
  });

  const reduxAdapter = new ReduxAdapter(
    authenticationInteractor,
  );

  const store = configureStore(reduxAdapter);

  return { store };
};
