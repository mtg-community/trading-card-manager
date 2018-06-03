// @flow strict

import { takeLatest, put, call } from 'redux-saga/effects';
import { signInWithEmailAndPassword } from '../../../data/firebase/authentication';
import { SCREENS } from '../../navigation/screens';
import { showModal } from '../../navigation';
import { setUserAction } from '../ducks/user';

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
    console.log('ERROR ACONTECEU', error);
    showModal(SCREENS.ERROR, 'ERROR');
  }
}

export function* rootSaga(): Generator<*, *, *> {
  yield [takeLatest(SIGN_IN, signInSaga)];
}
