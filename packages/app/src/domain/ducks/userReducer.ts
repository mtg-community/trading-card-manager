import { createReducer, createAction } from 'redux-starter-kit'
import { User } from "../entities";

export const NO_ALERTS = { showAlert: false, message: '' }

export const NOT_LOGGED_IN = {
  id: null
}

export const USER_INITIAL_STATE = {
  user: NOT_LOGGED_IN,
  alerts: NO_ALERTS
};

export const userSelector = state => state.user

export const updateUser = createAction('duck/user/updateUser')
export const showAlert = createAction('duck/user/showAlert')
export const signIn = createAction('saga/user/signIn')
export const signOut = createAction('saga/user/signOut')

export const handleUpdateUser = (state, { payload }) => ({
  ...state,
  user: payload
})

export const handleShowAlert = (state, { payload }) => ({
  ...state,
  alerts: {
    showAlert: true,
    message: payload
  }
})

export const userReducer = createReducer(USER_INITIAL_STATE, {
  [updateUser.toString()]: handleUpdateUser,
  [showAlert.toString()]: handleShowAlert
})
