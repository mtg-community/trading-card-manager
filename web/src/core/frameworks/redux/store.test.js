import { configureStore } from './store';
import { mockReduxAdapter } from './__mocks__/reduxAdapter';
import { ReduxAdapter } from './reduxAdapter';
import { mockAuthenticationInteractor } from '../../useCases/__mocks__/authenticatorInteractor';

describe('Store', () => {
  it('fails when initialized without ReduxAdapter', () => {
    expect(() => {
      configureStore();
    }).toThrow();

    expect(() => {
      const mockReduxAdapter = new ReduxAdapter(mockAuthenticationInteractor);
      mockReduxAdapter.hasBeenInitialized = () => false;
      configureStore(mockReduxAdapter);
    }).toThrow('ReduxAdapter is required.');
  });

  it('configures and creates the store', () => {
    const store = configureStore(mockReduxAdapter);
    expect(store.getState()).toBeInstanceOf(Object);
  });
});
