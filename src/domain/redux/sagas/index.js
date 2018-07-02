// @flow strict

import I18n from 'react-native-i18n';
import { takeLatest, put, call, all } from 'redux-saga/effects';
import {
  signInWithEmailAndPassword,
  signUpWithEmailAndPassword,
  signOut,
  forgotPassword,
} from '../../../data/firebase/authentication';
import { Navigator } from '../../../presentation/navigation/index';
import { SCREENS } from '../../../presentation/navigation/screens';
import { setUserAction } from '../ducks/user';
import type {
  ForgotPasswordAction,
  AuthUserAction,
  ActionType,
} from '../types';

export const SIGN_IN = 'user/saga/sign_in';
export const SIGN_UP = 'user/saga/sign_up';
export const LOG_OUT = 'user/saga/log_out';
export const FORGOT_PASSWORD = 'user/saga/forgot_password';

function* signInSaga(action: AuthUserAction) {
  try {
    const user = yield call(
      signInWithEmailAndPassword,
      action.email,
      action.password,
    );
    yield put(setUserAction(user));
  } catch (error) {
    const title = I18n.t('SIGN_IN/ERROR_TITLE');
    Navigator.showModal(SCREENS.ERROR.route, title, { error, title });
  }
}

function* signUpSaga(action: AuthUserAction) {
  try {
    const user = yield call(
      signUpWithEmailAndPassword,
      action.email,
      action.password,
    );
    yield put(setUserAction(user));
  } catch (error) {
    const title = I18n.t('SIGN_UP/ERROR_TITLE');
    Navigator.showModal(SCREENS.ERROR.route, title, { error, title });
  }
}

function* forgotPasswordSaga(action: ForgotPasswordAction) {
  try {
    yield call(forgotPassword, action.email);
    alert(I18n.t('PASSWORD_RECOVERY/ALERT/MESSAGE'));
  } catch (error) {
    const title = I18n.t('SIGN_UP/ERROR_TITLE');
    Navigator.showModal(SCREENS.ERROR.route, title, { error, title });
  }
}

function* logoutSaga(action: ActionType) {
  try {
    yield call(signOut);
    yield put(setUserAction(null));
  } catch (error) {
    const title = I18n.t('LOG_OUT/ERROR_TITLE');
    Navigator.showModal(SCREENS.ERROR.route, title, { error, title });
  }
}

export function* rootSaga(): Generator<*, *, *> {
  yield all([
    takeLatest(SIGN_IN, signInSaga),
    takeLatest(SIGN_UP, signUpSaga),
    takeLatest(FORGOT_PASSWORD, forgotPasswordSaga),
    takeLatest(LOG_OUT, logoutSaga),
  ]);
}
