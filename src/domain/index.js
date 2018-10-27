// @flow strict

import { ReduxAdapter } from '../../domain/adapters/redux/adapter';
import {
  forgotPassword,
  signInWithEmailAndPassword,
  signOut,
  signUpWithEmailAndPassword,
} from '../data/firebase/authentication';

export const DomainLayer = async () => {
  ReduxAdapter.authentication = {
    signInWithEmailAndPassword,
    signUpWithEmailAndPassword,
    forgotPassword,
    signOut,
  };
};
