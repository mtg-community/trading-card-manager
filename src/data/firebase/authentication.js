// @flow

import Firebase, { User } from 'react-native-firebase';
import isEmail from 'validator/lib/isEmail';

export const INVALID_EMAIL_ERROR = 'Invalid Email';

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  if (!isEmail(email)) {
    throw new Error(INVALID_EMAIL_ERROR);
  }

  return Firebase.auth().signInWithEmailAndPassword(email, password);
};

export const createUserWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  if (!isEmail(email)) {
    throw new Error(INVALID_EMAIL_ERROR);
  }

  return Firebase.auth().createUserWithEmailAndPassword(email, password);
};
