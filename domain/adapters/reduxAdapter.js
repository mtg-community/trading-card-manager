import { AuthenticationInteractor } from '../useCases/authenticatorInteractor';
import { CounterInteractor } from '../useCases/counterInteractor';

export class ReduxAdapter {
  static authentication: AuthenticationInteractor;
  static counter: CounterInteractor;
}
