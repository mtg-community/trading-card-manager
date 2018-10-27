// @flow strict

import { ReduxAdapter } from '../../domain/adapters/reduxAdapter';
import { CounterInteractor } from '../../domain/useCases/counterInteractor';
import {
  forgotPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signUpWithEmailAndPassword,
} from '../data/firebase/authentication';

export const DomainLayer = async () => {
  ReduxAdapter.authentication = {
    signInWithEmailAndPassword,
    signUpWithEmailAndPassword,
    signOut,
    forgotPassword,
    onAuthStateChanged,
  };

  ReduxAdapter.counter = new CounterInteractor(-10, 10);
};
