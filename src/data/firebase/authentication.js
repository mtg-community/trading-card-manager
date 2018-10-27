// @flow strict

import Firebase from 'react-native-firebase';
import isEmail from 'validator/lib/isEmail';
import { User } from '../../../domain/entities/user';

type UnsubscribeFunction = () => void;

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  const userCredentialPromise = await Firebase.auth().signInAndRetrieveDataWithEmailAndPassword(
    email,
    password,
  );

  // FIXME: Need to fix
  // return userCredentialPromise.user;
  return new User(userCredentialPromise.user);
};

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User> => {
  const userCredentialPromise = await Firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(
    email,
    password,
  );

  // return userCredentialPromise.user;

  // FIXME: Need to fix
  // return userCredentialPromise.user;
  return new User(userCredentialPromise.user);
};

export const onAuthStateChanged = (
  callback: (?User) => void,
): UnsubscribeFunction => {
  return Firebase.auth().onAuthStateChanged(callback);
};

export const signOut = async (): Promise<void> => Firebase.auth().signOut();

export const forgotPassword = async (email: string): Promise<void> => {
  Firebase.auth().sendPasswordResetEmail(email);
};
