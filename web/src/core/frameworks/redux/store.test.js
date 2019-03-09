import { configureStore } from './store';
import { mockReduxAdapter } from './__mocks__/reduxAdapter';

describe('Store', () => {
  it('fails when initialized without ReduxAdapter', () => {
    expect(() => {
      configureStore();
    }).toThrow();
  });

  it('configures and creates the store', () => {
    const store = configureStore(mockReduxAdapter);
    expect(store.getState()).toBeInstanceOf(Object);
  });
});
