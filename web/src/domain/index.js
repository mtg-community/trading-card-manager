import { ReduxAdapter, AuthenticationInteractor } from 'core';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  signUpWithEmailAndPassword,
} from '../data/firebase/authentication';
import { createStore } from './redux';

export const initializeDomainLayer = () => {
  const authenticationInteractor = new AuthenticationInteractor({
    signOut: signOut,
    signIn: signInWithEmailAndPassword,
    signUp: signUpWithEmailAndPassword,
    resetPassword: sendPasswordResetEmail,
  });

  const reduxAdapter = new ReduxAdapter(authenticationInteractor);

  return { store: createStore(reduxAdapter) };
};
