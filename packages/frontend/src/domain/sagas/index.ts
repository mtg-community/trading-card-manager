import { all, takeLatest } from 'redux-saga/effects';
import {
  createUserWithEmailAndPasswordSaga,
  signIn,
  signInWithEmailAndPasswordSaga,
  signOut,
  signOutSaga,
  signUp,
} from './authenticationSaga';
import { SagaIterator } from 'redux-saga';

export function* rootSaga(): SagaIterator {
  yield all([
    takeLatest(signIn, signInWithEmailAndPasswordSaga),
    takeLatest(signUp, createUserWithEmailAndPasswordSaga),
    takeLatest(signOut, signOutSaga),
  ]);
}
