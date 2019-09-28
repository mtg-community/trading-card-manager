import { put, call } from 'redux-saga/effects'
import { signInWithEmailAndPassword } from '../../data/firebase/authentication'
import { showAlert, updateUser } from '../ducks/authenticationReducer'

export function* signInWithEmailAndPasswordSaga({ payload }) {
  try {
    const { password, email } = payload
    const User = yield call(signInWithEmailAndPassword, email, password)
    yield put(updateUser(User))
  } catch (error) {
    yield put(showAlert(error.message))
  }
}
