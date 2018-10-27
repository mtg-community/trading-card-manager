// @flow strict

import { Counter } from '../entities/counter';

export class CounterInteractor {
  higherBound: number = 10;
  lowerBound: number = 0;

  constructor(lowerBound: number = 0, higherBound: number = 10) {
    this.lowerBound = lowerBound;
    this.higherBound = higherBound;
  }

  increment(counter: Counter, qty?: number): Counter {
    if (counter.count < this.higherBound) {
      counter.increment(qty);
    }

    return counter;
  }

  decrement(counter: Counter, qty?: number): Counter {
    if (counter.count > this.lowerBound) {
      counter.decrement(qty);
    }

    return counter;
  }
}
