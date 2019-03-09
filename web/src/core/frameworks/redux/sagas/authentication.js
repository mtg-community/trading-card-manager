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
import { FORGOT_PASSWORD, LOG_OUT, SIGN_IN, SIGN_UP } from './index';

export const loginAction = (
  email: string,
  password: string,
  onError: Error => void,
): AuthUserAction => ({
  type: SIGN_IN,
  email,
  password,
  onError,
});

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

export const signUpAction = (
  email: string,
  password: string,
  onError: Error => void,
): AuthUserAction => ({
  type: SIGN_UP,
  email,
  password,
  onError,
});

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

export const forgotPasswordAction = (
  email: string,
  onSuccess: () => void,
  onError: Error => void,
): ForgotPasswordAction => ({
  type: FORGOT_PASSWORD,
  email,
  onSuccess,
  onError,
});

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

export const logOutAction = (
  onSuccess?: () => void,
  onError?: Error => void,
): LogOutAction => ({
  type: LOG_OUT,
  onSuccess,
  onError,
});

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
