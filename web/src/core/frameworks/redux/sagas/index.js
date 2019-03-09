// @flow strict

import { takeLatest, all, throttle } from 'redux-saga/effects';
import {
  signInSaga,
  signUpSaga,
  forgotPasswordSaga,
  logoutSaga,
} from './authentication';
import { ReduxAdapter } from '../reduxAdapter';

const ONE_SECOND = 1000;

export const SIGN_IN = 'user/saga/sign_in';
export const SIGN_UP = 'user/saga/sign_up';
export const LOG_OUT = 'user/saga/log_out';
export const FORGOT_PASSWORD = 'user/saga/forgot_password';

export function* rootSaga(adapter: ReduxAdapter): Generator<*, *, *> {
  yield all([
    takeLatest(SIGN_IN, signInSaga, adapter),
    takeLatest(SIGN_UP, signUpSaga, adapter),
    takeLatest(FORGOT_PASSWORD, forgotPasswordSaga, adapter),
    throttle(ONE_SECOND, LOG_OUT, logoutSaga, adapter),
  ]);
}
