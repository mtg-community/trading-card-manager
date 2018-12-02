// @flow strict

import { call, put } from 'redux-saga/effects';
import { ReduxAdapter } from '../reduxAdapter';
import { setUserAction } from '../index';
import type {
  AuthUserAction,
  ForgotPasswordAction,
  LogOutAction,
} from '../types';

export function* signInSaga(action: AuthUserAction): Generator<*, *, *> {
  try {
    const user = yield call(
      ReduxAdapter.authentication.signIn,
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
      ReduxAdapter.authentication.signUp,
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
    yield call(ReduxAdapter.authentication.forgotPassword, action.email);
    action.onSuccess();
  } catch (error) {
    action.onError(error);
  }
}

export function* logoutSaga(action: LogOutAction): Generator<*, *, *> {
  try {
    yield call(ReduxAdapter.authentication.signOut);
    yield put(setUserAction(null));
    action.onSuccess && action.onSuccess();
  } catch (error) {
    action.onError && action.onError(error);
  }
}
