import { AuthenticationInteractor } from '../../useCases/authenticatorInteractor';
import { CounterInteractor } from '../../useCases/counterInteractor';

export interface Adapter {
  authentication: AuthenticationInteractor;
  counter: CounterInteractor;
  hasBeenInitialized: () => boolean;
}

export class ReduxAdapter implements Adapter {
  authentication: AuthenticationInteractor;
  counter: CounterInteractor;

  constructor(
    authentication: AuthenticationInteractor,
    counter: CounterInteractor = new CounterInteractor(-10, 10),
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
