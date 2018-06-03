// @flow strict

import { takeLatest, put, call, all } from 'redux-saga/effects';
import { signInWithEmailAndPassword } from '../../../data/firebase/authentication';
import { SCREENS } from '../../navigation/screens';
import { showModal } from '../../navigation';
import { setUserAction } from '../ducks/user';
import I18n from 'react-native-i18n';

export const SIGN_IN = 'user/saga/sign_in';

function* signInSaga(action) {
  try {
    const user = yield call(
      signInWithEmailAndPassword,
      action.email,
      action.password,
    );
    yield put(setUserAction(user));
  } catch (error) {
    const title = I18n.t('SIGN_IN/ERROR_TITLE');
    showModal(SCREENS.ERROR, title, { error, title });
  }
}

export function* rootSaga(): Generator<*, *, *> {
  yield all([takeLatest(SIGN_IN, signInSaga)]);
}
