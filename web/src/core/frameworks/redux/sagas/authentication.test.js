import { loginAction } from './authentication';
import { setUserAction } from '../../..';
import { User } from '../../../entities';
import { configureTestStore } from '../__mocks__/store';
import { getAction } from '../__mocks__/asyncActions';

describe('Authentication Sagas', function() {
  const email = 'email@email.com';
  const password = 'super_secret';
  const mockUser = new User('ID', email);
  const mockOnError = jest.fn();
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
    store.reset();
  });

  fit('logs in and update user on the state', async function() {
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

  // describe('Login Saga', function() {
  //   test('success', async () => {
  //     const action = loginAction(email, password, mockOnError);
  //     const generator = signInSaga(mockInteractor, action);
  //
  //     expect(await generator.next().value).toEqual(
  //       call(mockInteractor.signIn, action.email, action.password),
  //     );
  //     expect(await generator.next(mockUser).value).toEqual(
  //       put(setUserAction(mockUser)),
  //     );
  //     expect(generator.next().done).toBe(true);
  //   });
  //
  //   test('failure', async () => {
  //     const action = loginAction(email, password, mockOnError);
  //     const generator = signInSaga(undefined, action);
  //
  //     expect(generator.next().done).toBe(true);
  //     expect(action.onError).toHaveBeenCalled();
  //   });
  // });
});
