// @flow strict

import { ReduxAdapter } from 'domain/adapters/reduxAdapter';
import { AuthenticationInteractor } from 'domain/useCases/authenticatorInteractor';
import { CounterInteractor } from 'domain/useCases/counterInteractor';
import {
  forgotPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signUpWithEmailAndPassword,
} from '../data/firebase/authentication';

export const DomainLayer = async () => {
  ReduxAdapter.authentication = new AuthenticationInteractor({
    signOut,
    signIn: signInWithEmailAndPassword,
    signUp: signUpWithEmailAndPassword,
    resetPassword: forgotPassword,
    authStateListener: onAuthStateChanged,
  });

  ReduxAdapter.counter = new CounterInteractor(-10, 10);
};
