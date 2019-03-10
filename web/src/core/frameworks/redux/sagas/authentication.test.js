import { loginAction, signInSaga } from './authentication';
import { setUserAction } from '../../..';
import { call, put } from 'redux-saga/effects';
import { User } from '../../../entities';

describe('Authentication Sagas', function() {
  const email = 'email@email.com';
  const password = 'super_secret';
  const mockUser = new User('ID', email);
  const mockOnError = jest.fn();
  let mockInteractor;

  beforeEach(() => {
    mockInteractor = { signIn: jest.fn() };
    mockOnError.mockReset();
  });

  describe('Login Saga', function() {
    test('success', async () => {
      const action = loginAction(email, password, mockOnError);
      const generator = signInSaga(mockInteractor, action);

      expect(await generator.next().value).toEqual(
        call(mockInteractor.signIn, action.email, action.password),
      );
      expect(await generator.next(mockUser).value).toEqual(
        put(setUserAction(mockUser)),
      );
      expect(generator.next().done).toBe(true);
    });

    test('failure', async () => {
      const action = loginAction(email, password, mockOnError);
      const generator = signInSaga(undefined, action);

      expect(generator.next().done).toBe(true);
      expect(action.onError).toHaveBeenCalled();
    });
  });
});
