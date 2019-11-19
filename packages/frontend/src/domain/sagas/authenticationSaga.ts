import { put, call } from 'redux-saga/effects';
import {
  createUserWithEmailAndPassword,
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
  'saga/user/signIn',
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
