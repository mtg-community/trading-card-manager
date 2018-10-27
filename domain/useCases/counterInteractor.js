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
    counter.increment(qty);

    if (counter.count >= this.higherBound) {
      counter = new Counter(this.higherBound);
    }

    return counter;
  }

  decrement(counter: Counter, qty?: number): Counter {
    counter.decrement(qty);

    if (counter.count <= this.lowerBound) {
      counter = new Counter(this.lowerBound);
    }

    return counter;
  }
}
