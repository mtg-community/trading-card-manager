// @flow strict

export class Counter {
  count: number;

  constructor(startNumber: number) {
    this.count = startNumber;
  }

  increment(qty?: number = 1) {
    this.count += qty;
  }

  decrement(qty?: number = 1) {
    this.count -= qty;
  }
}
