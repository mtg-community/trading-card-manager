import { Counter } from '../entities/counter';

export class CounterInteractor {
  higherBound: number = 10;
  lowerBound: number = 0;

  constructor(lowerBound: number = 0, higherBound: number = 10) {
    this.lowerBound = lowerBound;
    this.higherBound = higherBound;
  }

  increment(counter: Counter, qty?: number = 1): Counter {
    counter.increment(qty);

    if (counter.count > this.higherBound) {
      return new Counter(this.higherBound);
    } else {
      return new Counter(counter.count);
    }
  }

  decrement(counter: Counter, qty?: number = 1): Counter {
    counter.decrement(qty);

    if (counter.count < this.lowerBound) {
      return new Counter(this.lowerBound);
    } else {
      return new Counter(counter.count);
    }
  }
}
