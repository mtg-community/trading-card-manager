import { setUserListenerAction } from 'core';
import { trackUser } from '../services/monitoring';
import { dispatch } from '../redux';

export const authStateHasChanged = user => {
  dispatch(setUserListenerAction(user));
  trackUser(user);
};
