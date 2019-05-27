'use strict';
// @flow strict
exports.__esModule = true;
var email_1 = require('./email');
var defaultOptionalFields = {
  name: '',
  emailVerified: false,
};
exports.userMustHaveAnId = 'User must have an Id';
var User = /** @class */ (function() {
  function User(id, email, opt) {
    if (opt === void 0) {
      opt = defaultOptionalFields;
    }
    if (!id) {
      throw Error(exports.userMustHaveAnId);
    }
    this.id = id;
    this.email = new email_1.Email(email.toString());
    this.emailVerified = opt.emailVerified;
    this.name = opt.name;
  }
  return User;
})();
exports.User = User;
