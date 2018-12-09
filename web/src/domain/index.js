import {
  ReduxAdapter,
  AuthenticationInteractor,
  CounterInteractor,
} from 'core';

export const InitializeDomainLayer = () => {
  ReduxAdapter.authentication = new AuthenticationInteractor({
    signOut: () => ({}),
    signIn: () => ({}),
    signUp: () => ({}),
    resetPassword: () => ({}),
    authStateListener: () => ({}),
  });

  ReduxAdapter.counter = new CounterInteractor(-5, 5);
};
