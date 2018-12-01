// @flow

import { Email, INVALID_EMAIL_ERROR } from '../email';

describe('Email Tiny Type', () => {
  it('does not accept invalid emails', () => {
    expect(() => new Email('invalid_email')).toThrowError(INVALID_EMAIL_ERROR);
  });

  it('coerces to normal string', () => {
    const email = 'eduardo@email.com';
    expect(new Email(email) == email).toBeTruthy();
  });

  it('compares with other strings', () => {
    const email = 'eduardo@email.com';
    expect(new Email(email).equals(email)).toBeTruthy();
  });
});
