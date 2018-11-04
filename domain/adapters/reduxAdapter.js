// @flow strict

import { AuthenticationInteractor } from '../useCases/authenticatorInteractor';
import { CounterInteractor } from '../useCases/counterInteractor';

export class ReduxAdapter {
  static authentication: AuthenticationInteractor;
  static counter: CounterInteractor;

  static hasBeenInitialized = () => {
    return !!ReduxAdapter.authentication && !!ReduxAdapter.counter;
  };
}
