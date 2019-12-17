import { put, call } from 'redux-saga/effects';
import { logInAsync } from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import {
  GOOGLE_IOS_CLIENT_ID,
  GOOGLE_ANDROID_CLIENT_ID,
} from 'react-native-dotenv';
import {
  createFacebookCredential,
  createGoogleCredential,
  createUserWithEmailAndPassword,
  signInWithCredential,
  signInWithEmailAndPassword,
} from '../../data/firebase/authentication';
import {
  showAlert,
  updateUser,
  setLoading,
} from '../ducks/authenticationReducer';
import { NOT_LOGGED_IN_USER } from '../entities/user';
import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { Email } from '../entities';
import { PayloadActionCreator } from '@reduxjs/toolkit/src/createAction';
import { SagaIterator } from 'redux-saga';

export const signIn: PayloadActionCreator<LoginCredentials> = createAction(
  'saga/user/signInWithEmailAndPassword',
);
export const signInWithGoogle: PayloadActionCreator<void> = createAction(
  'saga/user/signInWithGoogle',
);
export const signInWithFacebook: PayloadActionCreator<void> = createAction(
  'saga/user/signInWithFacebook',
);
export const signUp: PayloadActionCreator<LoginCredentials> = createAction(
  'saga/user/signUp',
);
export const signOut: PayloadActionCreator<void> = createAction(
  'saga/user/signOut',
);

export interface LoginCredentials {
  password: string;
  email: Email;
}

export function* signInWithEmailAndPasswordSaga(
  action: PayloadAction<LoginCredentials>,
): SagaIterator {
  try {
    const { password, email } = action.payload;
    yield put(setLoading(true));
    const User = yield call(signInWithEmailAndPassword, email, password);
    yield put(updateUser(User));
  } catch (error) {
    yield put(showAlert(error.message));
  } finally {
    yield put(setLoading(false));
  }
}

export function* signInWithGoogleSaga(): SagaIterator {
  try {
    const { idToken } = yield call(logInAsync, {
      clientId: '',
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      androidClientId: GOOGLE_ANDROID_CLIENT_ID,
    });
    yield put(setLoading(true));
    const googleCredential = yield call(createGoogleCredential, idToken);
    const User = yield call(signInWithCredential, googleCredential);
    yield put(updateUser(User));
  } catch (error) {
    yield put(showAlert(error.message));
  } finally {
    yield put(setLoading(false));
  }
}

export function* signInWithFacebookSaga(): SagaIterator {
  try {
    const { token } = yield call(Facebook.logInWithReadPermissionsAsync, {
      permissions: ['public_profile', 'email'],
    });
    yield put(setLoading(true));
    const facebookCredential = yield call(createFacebookCredential, token);
    const User = yield call(signInWithCredential, facebookCredential);
    yield put(updateUser(User));
  } catch (error) {
    yield put(showAlert(error.message));
  } finally {
    yield put(setLoading(false));
  }
}

export function* createUserWithEmailAndPasswordSaga(
  action: PayloadAction<LoginCredentials>,
): SagaIterator {
  try {
    const { password, email } = action.payload;
    yield put(setLoading(true));
    const User = yield call(createUserWithEmailAndPassword, email, password);
    yield put(updateUser(User));
  } catch (error) {
    yield put(showAlert(error.message));
  } finally {
    yield put(setLoading(false));
  }
}

export function* signOutSaga(): SagaIterator {
  try {
    yield put(setLoading(true));
    yield call(signOut);
    yield put(updateUser(NOT_LOGGED_IN_USER));
  } catch (error) {
    yield put(showAlert(error.message));
  } finally {
    yield put(setLoading(false));
  }
}
