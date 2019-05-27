const isEmail: (email: string) => boolean = require('validator/lib/isEmail');

export const INVALID_EMAIL_ERROR = 'Invalid Email';

export class Email {
  _email: string;

  constructor(email: string) {
    if (!isEmail(email)) {
      throw new Error(`${INVALID_EMAIL_ERROR} ${email}`);
    }

    this._email = email;
  }

  equals(email: string) {
    return this._email === email;
  }

  toString() {
    return this._email;
  }

  valueOf() {
    return this._email;
  }
}
