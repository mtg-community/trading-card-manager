// @flow strict

import { call, put } from 'redux-saga/effects';
import { ReduxAdapter } from '../reduxAdapter';
import { setUserAction } from '../index';
import type { AuthUserAction, ForgotPasswordAction } from '../types';

export function* signInSaga(action: AuthUserAction): Generator<*, *, *> {
  try {
    const user = yield call(
      ReduxAdapter.authentication.signIn,
      action.email,
      action.password,
    );
    yield put(setUserAction(user));
  } catch (error) {
    // const title = I18n.t('SIGN_IN/ERROR_TITLE');
    // Navigator.showModal(SCREENS.ERROR, title, { error, title });
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
    // const title = I18n.t('SIGN_UP/ERROR_TITLE');
    // Navigator.showModal(SCREENS.ERROR, title, { error, title });
  }
}

export function* forgotPasswordSaga(
  action: ForgotPasswordAction,
): Generator<*, *, *> {
  try {
    yield call(ReduxAdapter.authentication.forgotPassword, action.email);
    // alert(I18n.t('PASSWORD_RECOVERY/ALERT/MESSAGE'));
  } catch (error) {
    // const title = I18n.t('SIGN_UP/ERROR_TITLE');
    // Navigator.showModal(SCREENS.ERROR, title, { error, title });
  }
}

export function* logoutSaga(): Generator<*, *, *> {
  try {
    yield call(ReduxAdapter.authentication.signOut);
    yield put(setUserAction(null));
  } catch (error) {
    // const title = I18n.t('LOG_OUT/ERROR_TITLE');
    // Navigator.showModal(SCREENS.ERROR, title, { error, title });
  }
}
