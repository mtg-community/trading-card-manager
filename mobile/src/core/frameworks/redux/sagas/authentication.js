// @flow strict

import { call, put } from 'redux-saga/effects';
import { reduxAdapter } from '../store';
import type {
  AuthUserAction,
  ForgotPasswordAction,
  LogOutAction,
} from '../types';
import { setUserAction } from '../ducks/userReducer';

export function* signInSaga(action: AuthUserAction): Generator<*, *, *> {
  try {
    const user = yield call(
      reduxAdapter.authentication.signIn,
      action.email,
      action.password,
    );
    yield put(setUserAction(user));
  } catch (error) {
    action.onError(error);
  }
}

export function* signUpSaga(action: AuthUserAction): Generator<*, *, *> {
  try {
    const user = yield call(
      reduxAdapter.authentication.signUp,
      action.email,
      action.password,
    );
    yield put(setUserAction(user));
  } catch (error) {
    action.onError(error);
  }
}

// FIXME: ACTION THAT DOESN'T CHANGE THE STATE
export function* forgotPasswordSaga(
  action: ForgotPasswordAction,
): Generator<*, *, *> {
  try {
    yield call(reduxAdapter.authentication.forgotPassword, action.email);
    action.onSuccess();
  } catch (error) {
    action.onError(error);
  }
}

export function* logoutSaga(action: LogOutAction): Generator<*, *, *> {
  try {
    yield call(reduxAdapter.authentication.signOut);
    yield put(setUserAction(null));
    action.onSuccess && action.onSuccess();
  } catch (error) {
    action.onError && action.onError(error);
  }
}