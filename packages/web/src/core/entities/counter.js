'use strict';
exports.__esModule = true;
var Counter = /** @class */ (function() {
  function Counter(startNumber) {
    if (startNumber === void 0) {
      startNumber = 0;
    }
    this.count = startNumber;
  }
  Counter.prototype.increment = function(qty) {
    if (qty === void 0) {
      qty = 1;
    }
    this.count += qty;
  };
  Counter.prototype.decrement = function(qty) {
    if (qty === void 0) {
      qty = 1;
    }
    this.count -= qty;
  };
  return Counter;
})();
exports.Counter = Counter;
