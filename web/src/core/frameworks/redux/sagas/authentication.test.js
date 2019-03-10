import { loginAction, logOutAction, signUpAction } from './authentication';
import { setUserAction } from '../../..';
import { User } from '../../../entities';
import { configureTestStore } from '../__mocks__/store';
import { getAction } from '../__mocks__/asyncActions';

describe('Authentication Sagas', function() {
  const email = 'email@email.com';
  const password = 'super_secret';
  const mockUser = new User('ID', email);
  const mockOnError = jest.fn();
  const mockOnSuccess = jest.fn();

  let mockInteractor;
  let store;
  let initialState;

  beforeAll(() => {
    store = configureTestStore();
    initialState = store.getState();
  });

  beforeEach(() => {
    mockInteractor = { signIn: jest.fn() };
    mockOnError.mockReset();
    mockOnSuccess.mockReset();
    store.reset();
  });

  it('logs in and update user on the state', async function() {
    store.adapter.authentication.signIn = jest.fn(() =>
      Promise.resolve(mockUser),
    );
    const action = loginAction(email, password, mockOnError);
    const expectedAction = setUserAction(mockUser);

    store.dispatch(action);

    expect(action.onError).not.toHaveBeenCalled();
    expect(store.adapter.authentication.signIn).toHaveBeenCalledWith(
      email,
      password,
    );
    expect(await getAction(store, expectedAction)).toEqual(expectedAction);
  });

  it('sign up', async function() {
    store.adapter.authentication.signUp = jest.fn(() =>
      Promise.resolve(mockUser),
    );
    const action = signUpAction(email, password, mockOnError);
    const expectedAction = setUserAction(mockUser);

    store.dispatch(action);

    expect(action.onError).not.toHaveBeenCalled();
    expect(store.adapter.authentication.signUp).toHaveBeenCalledWith(
      email,
      password,
    );
    expect(await getAction(store, expectedAction)).toEqual(expectedAction);
  });

  it('logs out', async function() {
    store.adapter.authentication.signOut = jest.fn();
    const action = logOutAction(mockOnSuccess, mockOnError);
    const expectedAction = setUserAction(null);

    store.dispatch(action);

    expect(store.adapter.authentication.signOut).toHaveBeenCalledWith();
    expect(mockOnSuccess).toHaveBeenCalledWith();
    expect(await getAction(store, expectedAction)).toEqual(expectedAction);
  });
});
