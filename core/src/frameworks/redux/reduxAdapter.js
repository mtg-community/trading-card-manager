// @flow strict

import { AuthenticationInteractor } from '../../useCases/authenticatorInteractor';
import { CounterInteractor } from '../../useCases/counterInteractor';

export class ReduxAdapter {
  authentication: AuthenticationInteractor;
  counter: CounterInteractor;

  constructor(
    authentication: AuthenticationInteractor,
    counter: CounterInteractor,
  ) {
    this.authentication = authentication;
    this.counter = counter;

    if (!this.hasBeenInitialized()) {
      throw new Error('Please check ReduxAdapter initialization.');
    }
  }

  hasBeenInitialized = () => {
    return !!this.authentication && !!this.counter;
  };
}
