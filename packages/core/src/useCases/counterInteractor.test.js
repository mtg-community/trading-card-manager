import { CounterInteractor } from './counterInteractor';
import { Counter } from '../entities';

const initialValue = 5;
const lowerBound = 0;
const higherBound = 10;

describe('Counter Interactor', function() {
  let interactor;

  beforeEach(() => {
    interactor = new CounterInteractor(lowerBound, higherBound);
  });

  it('returns new instance after incrementing', function() {
    const counter = new Counter(initialValue);

    const newCounter = interactor.increment(counter, 1);

    expect(newCounter).not.toBe(counter);
    expect(newCounter.count).toEqual(initialValue + 1);
  });

  it('returns new instance after decrementing', function() {
    const counter = new Counter(initialValue);

    const newCounter = interactor.decrement(counter, 1);

    expect(newCounter).not.toBe(counter);
    expect(newCounter.count).toEqual(initialValue - 1);
  });

  it('does not exceeds the boundaries', function() {
    const lowerBoundCounter = interactor.decrement(
      new Counter(initialValue),
      9999,
    );
    expect(lowerBoundCounter.count).toEqual(lowerBound);

    const higherBoundCounter = interactor.increment(
      new Counter(initialValue),
      9999,
    );
    expect(higherBoundCounter.count).toEqual(higherBound);
  });
});
