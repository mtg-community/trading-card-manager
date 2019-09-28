import { all, takeLatest } from 'redux-saga/effects'
import { signIn } from '../ducks/authenticationReducer'
import { signInWithEmailAndPasswordSaga } from './authenticationSaga'

export function* rootSaga() {
  yield all([
    takeLatest(signIn, signInWithEmailAndPasswordSaga),
  ])
}
