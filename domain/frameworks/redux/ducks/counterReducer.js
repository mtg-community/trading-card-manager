// @flow strict

import { Counter } from '../../../entities/counter';
import { ReduxAdapter } from '../../adapters/reduxAdapter';
import type { StateType } from '../types';

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
): StateSliceType => {
  return ReduxAdapter.counter.increment(counter, action.qty);
};

const decrementReducer = (
  counter: StateSliceType,
  action: ActionType,
): StateSliceType => {
  return ReduxAdapter.counter.decrement(counter, action.qty);
};

export const counterReducer = (
  state: StateSliceType = INITIAL_STATE,
  action: ActionType,
): StateSliceType => {
  switch (action.type) {
    case INCREMENT:
      return incrementReducer(state, action);
    case DECREMENT:
      return decrementReducer(state, action);
    default:
      return state;
  }
};
