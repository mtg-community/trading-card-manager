import { ReduxAdapter } from '../../../core/src/frameworks/redux';
import { AuthenticationInteractor, CounterInteractor } from 'core/src/useCases';

export const InitializeDomainLayer = async () => {
  ReduxAdapter.authentication = new AuthenticationInteractor({
    signOut: () => {},
    signIn: () => {},
    signUp: () => {},
    resetPassword: () => {},
    authStateListener: () => {},
  });

  ReduxAdapter.counter = new CounterInteractor(-5, 5);
};
