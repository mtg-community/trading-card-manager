// @flow

import Firebase, { type User } from 'react-native-firebase';
import isEmail from 'validator/lib/isEmail';

export const INVALID_EMAIL_ERROR = 'Invalid Email';

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  if (!isEmail(email)) {
    throw new Error(INVALID_EMAIL_ERROR);
  }

  const userCredentialPromise = await Firebase.auth().signInAndRetrieveDataWithEmailAndPassword(
    email,
    password,
  );
  return userCredentialPromise.user;
};

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  if (!isEmail(email)) {
    throw new Error(INVALID_EMAIL_ERROR);
  }

  const userCredentialPromise = await Firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(
    email,
    password,
  );

  return userCredentialPromise.user;
};

export const onAuthStateChanged = (callback: (?User) => void): (() => void) => {
  return Firebase.auth().onAuthStateChanged(callback);
};

export const signOut = (): Promise<void> => Firebase.auth().signOut();
