import { ReduxAdapter } from '../reduxAdapter';
import { AuthenticationInteractor, CounterInteractor } from '../../../useCases';

const mockAuthenticationService = {
  signIn: jest.fn((email, password) => Promise.resolve({})),
  signUp: jest.fn((email, password) => Promise.resolve({})),
  signOut: jest.fn(() => Promise.resolve({})),
  resetPassword: jest.fn((email, password) => Promise.resolve({})),
};
const mockAuthenticationInteractor = new AuthenticationInteractor(
  mockAuthenticationService,
);

const mockCounterInteractor = new CounterInteractor(-10, 10);

export const mockReduxAdapter = new ReduxAdapter(
  mockAuthenticationInteractor,
  mockCounterInteractor,
);
