// @flow strict

import { Counter } from '../../../entities/counter';
import type { StateType } from '../types';
import { CounterInteractor } from '../../../useCases';

type StateSliceType = Counter;

type ActionType = {
  type: string,
  qty?: number,
};

const INITIAL_STATE = new Counter(1);
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
  counter: StateSliceType,
  action: ActionType,
  interactor: CounterInteractor,
): StateSliceType => {
  return interactor.increment(counter, action.qty);
};

const decrementReducer = (
  counter: StateSliceType,
  action: ActionType,
  interactor: CounterInteractor,
): StateSliceType => {
  return interactor.decrement(counter, action.qty);
};

export const counterReducer = (interactor: CounterInteractor) => (
  state: StateSliceType = INITIAL_STATE,
  action: ActionType,
): StateSliceType => {
  switch (action.type) {
    case INCREMENT:
      return incrementReducer(state, action, interactor);
    case DECREMENT:
      return decrementReducer(state, action, interactor);
    default:
      return state;
  }
};
