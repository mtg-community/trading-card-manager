import { ReduxAdapter } from 'core/src/frameworks/redux';
import { AuthenticationInteractor, CounterInteractor } from 'core/useCases';

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
