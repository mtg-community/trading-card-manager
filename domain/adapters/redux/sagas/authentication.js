import I18n from 'react-native-i18n';
import { call, put } from 'redux-saga/effects';
import { Navigator } from '../../../../src/presentation/navigator';
import { SCREENS } from '../../../../src/presentation/screens';
import { setUserAction } from '../';
import type { AuthUserAction, ForgotPasswordAction } from '../types';

export function* signInSaga(action: AuthUserAction) {
  try {
    const user = yield call(
      ReduxAdapter.authentication.signIn,
      action.email,
      action.password,
    );
    yield put(setUserAction(user.firebaseUser));
  } catch (error) {
    const title = I18n.t('SIGN_IN/ERROR_TITLE');
    Navigator.showModal(SCREENS.ERROR.route, title, { error, title });
  }
}

export function* signUpSaga(action: AuthUserAction) {
  try {
    const user = yield call(
      ReduxAdapter.authentication.signUp,
      action.email,
      action.password,
    );
    yield put(setUserAction(user.firebaseUser));
  } catch (error) {
    const title = I18n.t('SIGN_UP/ERROR_TITLE');
    Navigator.showModal(SCREENS.ERROR.route, title, { error, title });
  }
}

export function* forgotPasswordSaga(action: ForgotPasswordAction) {
  try {
    yield call(ReduxAdapter.authentication.forgotPassword, action.email);
    alert(I18n.t('PASSWORD_RECOVERY/ALERT/MESSAGE'));
  } catch (error) {
    const title = I18n.t('SIGN_UP/ERROR_TITLE');
    Navigator.showModal(SCREENS.ERROR.route, title, { error, title });
  }
}

export function* logoutSaga() {
  try {
    yield call(ReduxAdapter.authentication.signOut);
    yield put(setUserAction(null));
  } catch (error) {
    const title = I18n.t('LOG_OUT/ERROR_TITLE');
    Navigator.showModal(SCREENS.ERROR.route, title, { error, title });
  }
}
