// @flow strict

import { ReduxAdapter } from 'core/src/frameworks/redux';
import { AuthenticationInteractor } from 'core/src/useCases/authenticatorInteractor';
import { CounterInteractor } from 'core/src/useCases/counterInteractor';
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
