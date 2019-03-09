import { configureTestStore } from '../../__mocks__/store';
import { resetStateAction } from '../../store';
import {
  selectUser,
  setUserAction,
  setUserListenerAction,
} from '../userReducer';
import { User } from '../../../../entities';

describe('User Reducer', () => {
  const aUser = new User('ID', 'email@email.com');
  let store;
  let initialState;

  beforeAll(() => {
    store = configureTestStore();
    initialState = store.getState();
  });

  beforeEach(() => {
    store.dispatch(resetStateAction());
  });

  it('selects logged in user', () => {
    expect(selectUser(initialState)).toEqual(initialState.user);
  });

  it('sets current user by replacing it', () => {
    expect(selectUser(store.getState())).toEqual(null);

    store.dispatch(setUserAction(aUser));

    expect(selectUser(store.getState())).toEqual(aUser);
  });

  it('exposes the same setUserAction with a different type, for debugging reason', () => {
    expect(selectUser(store.getState())).toEqual(null);

    store.dispatch(setUserListenerAction(aUser));

    expect(selectUser(store.getState())).toEqual(aUser);
  });
});
