import { all, takeLatest } from 'redux-saga/effects';
import { signIn, signUp, signOut } from '../ducks/authenticationReducer';
import {
  createUserWithEmailAndPasswordSaga,
  signInWithEmailAndPasswordSaga,
  signOutSaga,
} from './authenticationSaga';

export function* rootSaga() {
  yield all([
    takeLatest(signIn, signInWithEmailAndPasswordSaga),
    takeLatest(signUp, createUserWithEmailAndPasswordSaga),
    takeLatest(signOut, signOutSaga),
  ]);
}
