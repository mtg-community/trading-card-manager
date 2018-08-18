// @flow strict

import Firebase, { type User } from 'react-native-firebase';
import isEmail from 'validator/lib/isEmail';

export const INVALID_EMAIL_ERROR = 'Invalid Email';

type UnsubscribeFunction = () => void;

const validateEmail = (email: string) => {
  if (!isEmail(email)) {
    throw new Error(INVALID_EMAIL_ERROR);
  }
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  validateEmail(email);

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
  validateEmail(email);

  const userCredentialPromise = await Firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(
    email,
    password,
  );

  return userCredentialPromise.user;
};

export const onAuthStateChanged = (
  callback: (?User) => void,
): UnsubscribeFunction => {
  return Firebase.auth().onAuthStateChanged(callback);
};

export const signOut = async (): Promise<void> => Firebase.auth().signOut();

export const forgotPassword = async (email: string): Promise<void> => {
  validateEmail(email);

  Firebase.auth().sendPasswordResetEmail(email);
};
