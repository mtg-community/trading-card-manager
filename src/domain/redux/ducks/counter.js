// @flow strict

import type { CounterStateSlice, PayloadlessAction, StateType } from '../types';

const INITIAL_STATE = 0;
const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

export const selectCounter = (state: StateType): number => state.counter;

export const incrementCounter = (): PayloadlessAction => ({
  type: INCREMENT,
});

export const decrementCounter = (): PayloadlessAction => ({
  type: DECREMENT,
});

export const counterReducer = (
  state: number = INITIAL_STATE,
  action: PayloadlessAction,
): CounterStateSlice => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
