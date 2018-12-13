import {
  ReduxAdapter,
  AuthenticationInteractor,
  CounterInteractor,
} from 'core';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  signUpWithEmailAndPassword,
} from '../data/firebase/authentication';

export const InitializeDomainLayer = () => {
  ReduxAdapter.authentication = new AuthenticationInteractor({
    signOut: signOut,
    signIn: signInWithEmailAndPassword,
    signUp: signUpWithEmailAndPassword,
    resetPassword: sendPasswordResetEmail,
    authStateListener: () => ({}),
  });
  ReduxAdapter.counter = new CounterInteractor(-5, 5);
};
