// @flow strict

import { takeLatest, all } from 'redux-saga/effects';
import {
  signInSaga,
  signUpSaga,
  forgotPasswordSaga,
  logoutSaga,
} from './authentication';

export const SIGN_IN = 'user/saga/sign_in';
export const SIGN_UP = 'user/saga/sign_up';
export const LOG_OUT = 'user/saga/log_out';
export const FORGOT_PASSWORD = 'user/saga/forgot_password';

export function* rootSaga(): Generator<*, *, *> {
  yield all([
    takeLatest(SIGN_IN, signInSaga),
    takeLatest(SIGN_UP, signUpSaga),
    takeLatest(FORGOT_PASSWORD, forgotPasswordSaga),
    takeLatest(LOG_OUT, logoutSaga),
  ]);
}
