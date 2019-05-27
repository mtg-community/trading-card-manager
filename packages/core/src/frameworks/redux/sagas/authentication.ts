import { call, put } from 'redux-saga/effects';
import {
  AuthUserAction,
  ForgotPasswordAction,
  LogOutAction,
} from '../types';
import { setUserAction } from '../../..';
import { AuthenticationInteractor } from '../../../useCases';

export const SIGN_IN = 'user/saga/sign_in';
export const SIGN_UP = 'user/saga/sign_up';
export const LOG_OUT = 'user/saga/log_out';
export const FORGOT_PASSWORD = 'user/saga/forgot_password';

export const loginAction = (
  email: string,
  password: string,
  onError: (error: Error) => void,
): AuthUserAction => ({
  type: SIGN_IN,
  email,
  password,
  onError,
});

export function* signInSaga(
  interactor: AuthenticationInteractor,
  action: AuthUserAction,
) {
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
  onError: (error: Error) => void,
): AuthUserAction => ({
  type: SIGN_UP,
  email,
  password,
  onError,
});

export function* signUpSaga(
  interactor: AuthenticationInteractor,
  action: AuthUserAction,
) {
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
  onError: (error: Error) => void,
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
) {
  try {
    yield call(interactor.forgotPassword, action.email);
    action.onSuccess();
  } catch (error) {
    action.onError(error);
  }
}

export const logOutAction = (
  onSuccess?: () => void,
  onError?: (error: Error) => void,
): LogOutAction => ({
  type: LOG_OUT,
  onSuccess,
  onError,
});

export function* logoutSaga(
  interactor: AuthenticationInteractor,
  action: LogOutAction,
) {
  try {
    yield call(interactor.signOut);
    yield put(setUserAction(undefined));
    action.onSuccess && action.onSuccess();
  } catch (error) {
    action.onError && action.onError(error);
  }
}
