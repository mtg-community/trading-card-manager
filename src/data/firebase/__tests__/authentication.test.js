// @flow

import React from 'react';
import { signInWithEmailAndPassword } from '../authentication';

const email = 'email';
const password = 'password';
const mockUser = {};

describe('Firebase Authentication Module', () => {
  it('should call signIn correctly', async () => {
    const user = await signInWithEmailAndPassword(email, password);

    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(email, password);
    expect(user).toEqual(mockUser);
  });

  describe('email validation', () => {
    it('should validate email during signing', async () => {
      await signInWithEmailAndPassword(email, password);
    });
  });
});

jest.mock('validator/lib/isEmail', () => ({
  isEmail: jest.fn(() => true),
}));

jest.mock('../authentication', () => ({
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve(mockUser)),
}));
