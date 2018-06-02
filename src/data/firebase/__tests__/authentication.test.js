// @flow

import React from 'react';
import { mockUser } from '../__mocks__/react-native-firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  INVALID_EMAIL_ERROR,
} from '../authentication';
import isEmail from 'validator/lib/isEmail';
import Firebase from 'react-native-firebase';

jest.mock('validator/lib/isEmail');

const email = 'email';
const password = 'password';

describe('Firebase Authentication Module', () => {
  beforeEach(() => {
    isEmail.mockReturnValue(true);
  });

  it('should call signInWithEmailAndPassword correctly', async () => {
    const user = await signInWithEmailAndPassword(email, password);

    expect(isEmail).toHaveBeenCalledWith(email);
    expect(Firebase.auth().signInWithEmailAndPassword).toHaveBeenCalledWith(
      email,
      password,
    );
    expect(user).toEqual(mockUser);
  });

  it('should call createUserWithEmailAndPassword correctly', async () => {
    const user = await createUserWithEmailAndPassword(email, password);

    expect(isEmail).toHaveBeenCalledWith(email);
    expect(Firebase.auth().createUserWithEmailAndPassword).toHaveBeenCalledWith(
      email,
      password,
    );
    expect(user).toEqual(mockUser);
  });

  it('should throw error is email is invalid', async () => {
    isEmail.mockReturnValue(false);

    await expect(
      createUserWithEmailAndPassword('INVALID_EMAIL', password),
    ).rejects.toThrow(INVALID_EMAIL_ERROR);

    await expect(
      signInWithEmailAndPassword('INVALID_EMAIL', password),
    ).rejects.toThrow(INVALID_EMAIL_ERROR);
  });
});
