import { initializeDomainLayer } from '../../index';
import { User } from '../../entities';
import {
  AUTH_INITIAL_STATE,
  NOT_LOGGED_IN,
  showAlert,
  updateUser,
} from '../authenticationReducer';

describe('Authentication Reducer', () => {
  const store = initializeDomainLayer();
  it('should update user on the store', () => {
    const uid = 'some_uid';
    const email = 'email@email.com';
    const emailVerified = true;
    const displayName = 'displayName';
    const mockFirebaseUser = { uid, email, displayName, emailVerified };
    const user = new User(mockFirebaseUser.uid, mockFirebaseUser.email, {
      emailVerified: mockFirebaseUser.emailVerified,
      name: mockFirebaseUser.displayName,
    });
    const expectedState = {
      user,
      alert: {
        showAlert: false,
        message: '',
      },
      isLoading: false,
    };
    store.dispatch(updateUser(user));
    expect(store.getState().authentication).toEqual(expectedState);
  });

  it('should sign out the user', () => {
    store.dispatch(updateUser(NOT_LOGGED_IN));
    expect(store.getState().authentication).toEqual(AUTH_INITIAL_STATE);
  });

  it('should show an error message when auth goes wrong', () => {
    const expectedState = {
      showAlert: true,
      message: 'User not found',
    };
    store.dispatch(showAlert('User not found'));
    expect(store.getState().authentication.alert).toEqual(expectedState);
  });
});
