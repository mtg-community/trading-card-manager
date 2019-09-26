import { all, takeLatest } from 'redux-saga/effects'
import { signIn } from '../ducks/userReducer'
import { signInWithEmailAndPasswordSaga } from './userSaga'

export function* rootSaga() {
  yield all([
    takeLatest(signIn, signInWithEmailAndPasswordSaga),
  ])
}
