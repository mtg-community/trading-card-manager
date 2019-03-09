// @flow strict

import { call, put } from 'redux-saga/effects';
import type {
  AuthUserAction,
  ForgotPasswordAction,
  LogOutAction,
  SetUserAction,
} from '../types';
import type { Saga } from 'redux-saga';
import { setUserAction } from '../ducks/userReducer';
import { AuthenticationInteractor } from '../../../useCases';

export function* signInSaga(
  interactor: AuthenticationInteractor,
  action: AuthUserAction,
): Saga<SetUserAction> {
  try {
    const user = yield call(interactor.signIn, action.email, action.password);
    yield put(setUserAction(user));
  } catch (error) {
    action.onError(error);
  }
}

export function* signUpSaga(
  interactor: AuthenticationInteractor,
  action: AuthUserAction,
): Saga<SetUserAction> {
  try {
    const user = yield call(interactor.signUp, action.email, action.password);
    yield put(setUserAction(user));
  } catch (error) {
    action.onError(error);
  }
}

// FIXME: ACTION THAT DOESN'T CHANGE THE STATE
export function* forgotPasswordSaga(
  interactor: AuthenticationInteractor,
  action: ForgotPasswordAction,
): Saga<SetUserAction> {
  try {
    yield call(interactor.forgotPassword, action.email);
    action.onSuccess();
  } catch (error) {
    action.onError(error);
  }
}

export function* logoutSaga(
  interactor: AuthenticationInteractor,
  action: LogOutAction,
): Saga<SetUserAction> {
  try {
    yield call(interactor.signOut);
    yield put(setUserAction(null));
    action.onSuccess && action.onSuccess();
  } catch (error) {
    action.onError && action.onError(error);
  }
}
