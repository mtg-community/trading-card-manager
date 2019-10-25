function emailIsValid(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const INVALID_EMAIL_ERROR = 'Invalid Email';

export class Email {
  _email: string;

  constructor(email: string) {
    if (!emailIsValid(email)) {
      throw new Error(`${INVALID_EMAIL_ERROR} ${email}`);
    }

    this._email = email;
  }

  equals(email: string): boolean {
    return this._email === email;
  }

  toString(): string {
    return this._email;
  }

  valueOf(): string {
    return this._email;
  }
}
