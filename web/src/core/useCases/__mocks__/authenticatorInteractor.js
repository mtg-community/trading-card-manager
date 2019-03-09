import { AuthenticationInteractor } from '../authenticatorInteractor';

const mockAuthenticationService = {
  signIn: jest.fn((email, password) => Promise.resolve({})),
  signUp: jest.fn((email, password) => Promise.resolve({})),
  signOut: jest.fn(() => Promise.resolve({})),
  resetPassword: jest.fn((email, password) => Promise.resolve({})),
};
export const mockAuthenticationInteractor = new AuthenticationInteractor(
  mockAuthenticationService,
);
