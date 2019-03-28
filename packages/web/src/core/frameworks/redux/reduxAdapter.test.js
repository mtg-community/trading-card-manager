import { ReduxAdapter } from './reduxAdapter';
import { mockAuthenticationInteractor } from '../../useCases/__mocks__/authenticatorInteractor';
import { mockCounterInteractor } from '../../useCases/__mocks__/counterInteractor';

describe('Redux Adapter', () => {
  it('fails when initialized without all parameters', () => {
    expect(() => {
      new ReduxAdapter();
    }).toThrow();
  });

  it('shows when it was correctly initialized', () => {
    const reduxAdapter = new ReduxAdapter(
      mockAuthenticationInteractor,
      mockCounterInteractor,
    );
    expect(reduxAdapter.hasBeenInitialized()).toBe(true);
  });
});
