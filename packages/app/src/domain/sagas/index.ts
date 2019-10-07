import { all, takeLatest } from 'redux-saga/effects';
import { signIn, signUp } from '../ducks/authenticationReducer';
import {
  createUserWithEmailAndPasswordSaga,
  signInWithEmailAndPasswordSaga,
} from './authenticationSaga';

export function* rootSaga() {
  yield all([
    takeLatest(signIn, signInWithEmailAndPasswordSaga),
    takeLatest(signUp, createUserWithEmailAndPasswordSaga),
  ]);
}
