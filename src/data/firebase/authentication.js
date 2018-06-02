// @flow

import Firebase, { type UserCredential } from 'react-native-firebase';
import isEmail from 'validator/lib/isEmail';

export const INVALID_EMAIL_ERROR = 'Invalid Email';

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<UserCredential> => {
  if (!isEmail(email)) {
    throw new Error(INVALID_EMAIL_ERROR);
  }

  return Firebase.auth().signInAndRetrieveDataWithEmailAndPassword(
    email,
    password,
  );
};

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<UserCredential> => {
  if (!isEmail(email)) {
    throw new Error(INVALID_EMAIL_ERROR);
  }

  return Firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(
    email,
    password,
  );
};
