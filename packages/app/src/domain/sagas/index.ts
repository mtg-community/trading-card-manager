import { all, takeLatest } from 'redux-saga/effects';
import {
  createUserWithEmailAndPasswordSaga,
  signIn,
  signInWithEmailAndPasswordSaga,
  signOut,
  signOutSaga,
  signUp,
} from './authenticationSaga';

export function* rootSaga() {
  yield all([
    takeLatest(signIn, signInWithEmailAndPasswordSaga),
    takeLatest(signUp, createUserWithEmailAndPasswordSaga),
    takeLatest(signOut, signOutSaga),
  ]);
}
