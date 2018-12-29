import { setUserListenerAction, User } from 'core';
import { trackUser } from '../services/monitoring';
import { dispatch } from '../redux';

export const whenUserLogsIn = user => {
  const authedUser = new User(user.uid, user.email, {
    emailVerified: user.emailVerified,
  });

  dispatch(setUserListenerAction(authedUser))
  trackUser(authedUser);
};

export const whenUserLogsOut = () => {
  dispatch(setUserListenerAction(null))
  trackUser(null);
};
