import I18n from 'react-native-i18n';
import { call, put } from 'redux-saga/effects';
import {
  signInWithEmailAndPassword,
  signUpWithEmailAndPassword,
  signOut,
  forgotPassword,
} from '../../../data/firebase/authentication';
import { Navigator } from '../../../presentation/navigation';
import { SCREENS } from '../../../presentation/navigation/screens';
import { setUserAction } from '../ducks/user';
import type {
  AuthUserAction,
  ForgotPasswordAction,
  ActionType,
} from '../types';

export function* signInSaga(action: AuthUserAction) {
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

export function* signUpSaga(action: AuthUserAction) {
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

export function* forgotPasswordSaga(action: ForgotPasswordAction) {
  try {
    yield call(forgotPassword, action.email);
    alert(I18n.t('PASSWORD_RECOVERY/ALERT/MESSAGE'));
  } catch (error) {
    const title = I18n.t('SIGN_UP/ERROR_TITLE');
    Navigator.showModal(SCREENS.ERROR.route, title, { error, title });
  }
}

export function* logoutSaga(action: ActionType) {
  try {
    yield call(signOut);
    yield put(setUserAction(null));
  } catch (error) {
    const title = I18n.t('LOG_OUT/ERROR_TITLE');
    Navigator.showModal(SCREENS.ERROR.route, title, { error, title });
  }
}
