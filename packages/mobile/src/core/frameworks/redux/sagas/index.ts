import { all, takeLatest, throttle } from 'redux-saga/effects';
import {
  FORGOT_PASSWORD,
  forgotPasswordSaga,
  LOG_OUT,
  logoutSaga,
  SIGN_IN,
  SIGN_UP,
  signInSaga,
  signUpSaga,
} from './authentication';
import { Adapter } from '../reduxAdapter';

const ONE_SECOND = 1000;

export function* rootSaga(adapter: Adapter) {
  yield all([
    takeLatest(SIGN_IN, signInSaga, adapter.authentication),
    takeLatest(SIGN_UP, signUpSaga, adapter.authentication),
    takeLatest(FORGOT_PASSWORD, forgotPasswordSaga, adapter.authentication),
    throttle(ONE_SECOND, LOG_OUT, logoutSaga, adapter.authentication),
  ]);
}
