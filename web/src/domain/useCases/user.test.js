import { setUserListenerAction, User } from 'core';
import { authStateHasChanged } from './user';
import { trackUser } from '../services/monitoring';
import { dispatch } from '../redux';

jest.mock('../services/monitoring');
jest.mock('../redux');

const user = new User('id', 'email@email.com');

describe('User use cases', function() {
  it('When auth status changes to logged in', function() {
    authStateHasChanged(user);

    expect(dispatch).toHaveBeenCalledWith(setUserListenerAction(user));
    expect(trackUser).toHaveBeenCalledWith(user);
  });

  it('When auth status changes to logged out', function() {
    authStateHasChanged(null);

    expect(dispatch).toHaveBeenCalledWith(setUserListenerAction(null));
    expect(trackUser).toHaveBeenCalledWith(null);
  });
});
