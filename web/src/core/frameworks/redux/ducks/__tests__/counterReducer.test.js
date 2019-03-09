import { configureTestStore } from '../../__mocks__/store';
import {
  counterSelector,
  decrementCounterAction,
  incrementCounterAction,
} from '../counterReducer';
import { resetStateAction } from '../../store';

describe('Counter Reducer', () => {
  const aNumber = 5;
  let store;
  let initialState;

  beforeAll(() => {
    store = configureTestStore();
    initialState = store.getState();
  });

  beforeEach(() => {
    store.dispatch(resetStateAction());
  });

  it('decrements the counter', () => {
    store.dispatch(decrementCounterAction(aNumber));

    expect(counterSelector(store.getState())).toEqual(
      counterSelector(initialState) - aNumber,
    );
  });

  it('increments the counter', () => {
    store.dispatch(incrementCounterAction(aNumber));

    expect(counterSelector(store.getState())).toEqual(
      counterSelector(initialState) + aNumber,
    );
  });

  it('selects the counter', () => {
    expect(counterSelector(initialState)).toEqual(initialState.counter.count);
  });
});
