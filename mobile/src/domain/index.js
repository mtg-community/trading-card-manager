// @flow strict

import { AuthenticationInteractor, configureStore, ReduxAdapter } from 'core';
import {
  forgotPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signUpWithEmailAndPassword,
} from '../data/firebase/authentication';

let store;

const createStore = () => {
  const middleware = [];
  const adapter = initializeReduxAdapter();

  store = configureStore(adapter, middleware); 

  return store;
};

function initializeReduxAdapter (){
  const authenticationInteractor = new AuthenticationInteractor({
    signOut,
    signIn: signInWithEmailAndPassword,
    signUp: signUpWithEmailAndPassword,
    resetPassword: forgotPassword,
    authStateListener: onAuthStateChanged,
  });

  return new ReduxAdapter(authenticationInteractor);
}

export const initializeDomainLayer = () => ({ store: createStore() });

export const getStore = () => {
  if (store) {
    return store;
  }

  return createStore();
};