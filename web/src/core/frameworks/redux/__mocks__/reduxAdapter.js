import { ReduxAdapter } from '../reduxAdapter';
import { mockAuthenticationInteractor } from '../../../useCases/__mocks__/authenticatorInteractor';
import { mockCounterInteractor } from '../../../useCases/__mocks__/counterInteractor';

export const mockReduxAdapter = new ReduxAdapter(
  mockAuthenticationInteractor,
  mockCounterInteractor,
);
