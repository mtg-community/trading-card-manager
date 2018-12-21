import firebase from 'firebase/app';
import { User } from 'core';

export const signInWithEmailAndPassword = async (email, password) => {
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  const userCredential = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  const user = userCredential.user;
  return new User(user.email, user.emailVerified);
};

export const signUpWithEmailAndPassword = async (email, password) => {
  const userCredential = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  const user = userCredential.user;
  return new User(user.email, user.emailVerified);
};

export const sendPasswordResetEmail = async (email) => await firebase.auth().sendPasswordResetEmail(email);

export const signOut = async () => await firebase.auth().signOut();

export const onAuthStateChanged = (callback, onError, onCompleted) => firebase.auth().onAuthStateChanged(callback, onError, onCompleted);
