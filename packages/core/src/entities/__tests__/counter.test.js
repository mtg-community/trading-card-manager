import { Counter } from '../counter';

describe('Counter', () => {
  const initialValue = 0;

  it('increments', function() {
    const counter = new Counter(initialValue);

    counter.increment();

    expect(counter.count).toEqual(initialValue + 1);
  });

  it('decrements', function() {
    const counter = new Counter(initialValue);

    counter.decrement();

    expect(counter.count).toEqual(initialValue - 1);
  });
});
