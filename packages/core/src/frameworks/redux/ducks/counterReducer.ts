import { Counter } from '../../../entities/counter';
import { StateType } from '../types';
import { CounterInteractor } from '../../../useCases/index';

type ActionType = {
  type: string,
  qty?: number,
};

const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

export const counterSelector = (state: StateType): number =>
  state.counter.count;

export const incrementCounterAction = (qty: number = 1): ActionType => ({
  type: INCREMENT,
  qty,
});

export const decrementCounterAction = (qty: number = 1): ActionType => ({
  type: DECREMENT,
  qty,
});

const incrementReducer = (
  counter: Counter,
  action: ActionType,
  interactor: CounterInteractor,
): Counter => {
  return interactor.increment(counter, action.qty);
};

const decrementReducer = (
  counter: Counter,
  action: ActionType,
  interactor: CounterInteractor,
): Counter => {
  return interactor.decrement(counter, action.qty);
};

export const counterReducer = (interactor: CounterInteractor) => (
  state: Counter = new Counter(0),
  action: ActionType,
): Counter => {
  switch (action.type) {
    case INCREMENT:
      return incrementReducer(state, action, interactor);
    case DECREMENT:
      return decrementReducer(state, action, interactor);
    default:
      return state;
  }
};
