import { all, takeLatest } from 'redux-saga/effects';
import {
  createUserWithEmailAndPasswordSaga,
  signIn,
  signInWithEmailAndPasswordSaga,
  signInWithFacebook,
  signInWithFacebookSaga,
  signInWithGoogle,
  signInWithGoogleSaga,
  signOut,
  signOutSaga,
  signUp,
} from './authenticationSaga';
import { SagaIterator } from 'redux-saga';

export function* rootSaga(): SagaIterator {
  yield all([
    takeLatest(signIn, signInWithEmailAndPasswordSaga),
    takeLatest(signInWithGoogle, signInWithGoogleSaga),
    takeLatest(signInWithFacebook, signInWithFacebookSaga),
    takeLatest(signUp, createUserWithEmailAndPasswordSaga),
    takeLatest(signOut, signOutSaga),
  ]);
}
