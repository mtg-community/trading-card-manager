// @flow

import React from 'react';
import { mockUserCredentials } from '../__mocks__/react-native-firebase';
import {
  signInWithEmailAndPassword,
  INVALID_EMAIL_ERROR,
  signUpWithEmailAndPassword,
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
    expect(
      Firebase.auth().signInAndRetrieveDataWithEmailAndPassword,
    ).toHaveBeenCalledWith(email, password);
    expect(user).toEqual(mockUserCredentials.user);
  });

  it('should call signUpWithEmailAndPassword correctly', async () => {
    const user = await signUpWithEmailAndPassword(email, password);

    expect(isEmail).toHaveBeenCalledWith(email);
    expect(
      Firebase.auth().createUserAndRetrieveDataWithEmailAndPassword,
    ).toHaveBeenCalledWith(email, password);
    expect(user).toEqual(mockUserCredentials.user);
  });

  it('should throw error is email is invalid', async () => {
    isEmail.mockReturnValue(false);

    await expect(
      signUpWithEmailAndPassword('INVALID_EMAIL', password),
    ).rejects.toThrow(INVALID_EMAIL_ERROR);

    await expect(
      signInWithEmailAndPassword('INVALID_EMAIL', password),
    ).rejects.toThrow(INVALID_EMAIL_ERROR);
  });
});
