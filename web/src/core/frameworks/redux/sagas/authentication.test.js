import {
  forgotPasswordAction,
  loginAction,
  logOutAction,
  signUpAction,
} from './authentication';
import { setUserAction } from '../../..';
import { User } from '../../../entities';
import { configureTestStore } from '../__mocks__/store';
import { getAction } from '../__mocks__/asyncActions';

describe('Authentication Sagas', function() {
  const email = 'email@email.com';
  const password = 'super_secret';
  const mockUser = new User('ID', email);

  let store;
  let initialState;

  beforeAll(() => {
    store = configureTestStore();
    initialState = store.getState();
  });

  beforeEach(() => {
    store.reset();
  });

  describe('Login Saga', function() {
    it('Success', async function() {
      store.adapter.authentication.signIn = jest.fn(() =>
        Promise.resolve(mockUser),
      );
      const action = loginAction(email, password, jest.fn());
      const expectedAction = setUserAction(mockUser);

      store.dispatch(action);

      expect(action.onError).not.toHaveBeenCalled();
      expect(store.adapter.authentication.signIn).toHaveBeenCalledWith(
        email,
        password,
      );
      expect(await getAction(store, expectedAction)).toEqual(expectedAction);
      expect(store.getState()).toEqual({ ...initialState, user: mockUser });
    });

    it('Failure', async function() {
      store.adapter.authentication.signIn = jest.fn().mockImplementation(() => {
        throw new Error();
      });
      const action = loginAction(email, password, jest.fn());

      store.dispatch(action);

      expect(store.adapter.authentication.signIn).toHaveBeenCalledWith(
        email,
        password,
      );
      expect(action.onError).toHaveBeenCalled();
    });
  });

  describe('Signup Saga', function() {
    test('Success', async function() {
      store.adapter.authentication.signUp = jest.fn(() =>
        Promise.resolve(mockUser),
      );
      const action = signUpAction(email, password, jest.fn());
      const expectedAction = setUserAction(mockUser);

      store.dispatch(action);

      expect(store.adapter.authentication.signUp).toHaveBeenCalledWith(
        email,
        password,
      );
      expect(await getAction(store, expectedAction)).toEqual(expectedAction);
      expect(store.getState()).toEqual({ ...initialState, user: mockUser });
    });

    test('Failure', async function() {
      store.adapter.authentication.signUp = jest.fn().mockImplementation(() => {
        throw new Error();
      });
      const action = signUpAction(email, password, jest.fn());

      store.dispatch(action);

      expect(store.adapter.authentication.signUp).toHaveBeenCalledWith(
        email,
        password,
      );
      expect(action.onError).toHaveBeenCalled();
    });
  });

  describe('Logout Saga', function() {
    test('Success', async function() {
      store.adapter.authentication.signOut = jest.fn(() => Promise.resolve());
      const action = logOutAction(jest.fn(), jest.fn());
      const expectedAction = setUserAction(null);

      store.dispatch(action);

      expect(store.adapter.authentication.signOut).toHaveBeenCalledWith();
      expect(await getAction(store, expectedAction)).toEqual(expectedAction);
      expect(action.onSuccess).toHaveBeenCalled();
      expect(store.getState()).toEqual({ ...initialState, user: null });
    });

    xit('Failure', async function() {
      store.adapter.authentication.signOut = jest
        .fn()
        .mockImplementation(() => {
          throw new Error();
        });
      const action = logOutAction(jest.fn(), jest.fn());

      store.dispatch(action);

      expect(store.adapter.authentication.signOut).toHaveBeenCalled();
      expect(action.onError).toHaveBeenCalled();
      expect(action.onSuccess).not.toHaveBeenCalled();
    });
  });

  xdescribe('Reset Password Saga', function() {
    test('Success', async function() {
      store.adapter.authentication.forgotPassword = jest.fn(() =>
        Promise.resolve(),
      );
      const action = forgotPasswordAction(email, jest.fn(), jest.fn());

      store.dispatch(action);

      expect(store.adapter.authentication.forgotPassword).toHaveBeenCalledWith(
        email,
      );
      expect(action.onSuccess).toHaveBeenCalledWith();
    });

    test('Failure', async function() {
      store.adapter.authentication.forgotPassword = jest
        .fn()
        .mockImplementation(() => {
          throw new Error();
        });
      const action = forgotPasswordAction(email, jest.fn(), jest.fn());

      store.dispatch(action);

      expect(store.adapter.authentication.forgotPassword).toHaveBeenCalledWith(
        email,
      );
      expect(action.onSuccess).not.toHaveBeenCalled();
      expect(action.onError).toHaveBeenCalled();
    });
  });
});
