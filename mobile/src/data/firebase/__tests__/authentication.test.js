// @flow

import React from 'react';
import { User } from 'domain/entities/user';
import { mockUserCredentials } from '../__mocks__/react-native-firebase';
import {
  signInWithEmailAndPassword,
  signUpWithEmailAndPassword,
  forgotPassword,
  onAuthStateChanged,
} from '../authentication';
import Firebase from 'react-native-firebase';

const email = 'email@email.com';
const password = 'password';

describe('Firebase Authentication Module', () => {
  it('calls signInWithEmailAndPassword correctly', async () => {
    const user = await signInWithEmailAndPassword(email, password);

    expect(
      Firebase.auth().signInAndRetrieveDataWithEmailAndPassword,
    ).toHaveBeenCalledWith(email, password);
    expect(user).toEqual(
      new User(
        mockUserCredentials.user.email,
        mockUserCredentials.user.emailVerified,
      ),
    );
  });

  it('calls signUpWithEmailAndPassword correctly', async () => {
    const user = await signUpWithEmailAndPassword(email, password);

    expect(
      Firebase.auth().createUserAndRetrieveDataWithEmailAndPassword,
    ).toHaveBeenCalledWith(email, password);
    expect(user).toEqual(
      new User(
        mockUserCredentials.user.email,
        mockUserCredentials.user.emailVerified,
      ),
    );
  });

  it('calls firebase send password reset email', async () => {
    const email = 'example@email.com';

    await forgotPassword(email);

    expect(Firebase.auth().sendPasswordResetEmail).toHaveBeenCalledWith(email);
  });

  it('attach a callback on user state and return an unsubscriber function', () => {
    const callback = (user: ?User) => {};
    const unsubscriber = onAuthStateChanged(callback);
    unsubscriber();

    expect(Firebase.auth().onAuthStateChanged).toHaveBeenCalledWith(callback);
    expect(unsubscriber).toHaveBeenCalled();
  });
});
