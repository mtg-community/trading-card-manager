'use strict';
exports.__esModule = true;
var validator_1 = require('validator');
exports.INVALID_EMAIL_ERROR = 'Invalid Email';
var Email = /** @class */ (function() {
  function Email(email) {
    if (!validator_1.isEmail(email)) {
      throw new Error(exports.INVALID_EMAIL_ERROR + ' ' + email);
    }
    this._email = email;
  }
  Email.prototype.equals = function(email) {
    return this._email === email;
  };
  Email.prototype.toString = function() {
    return this._email;
  };
  Email.prototype.valueOf = function() {
    return this._email;
  };
  return Email;
})();
exports.Email = Email;
