import firebase from 'firebase/app';
import { User } from 'core';

export const signInWithEmailAndPassword = async (email, password) => {
  const userCredential = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);

  const user = userCredential;
  if (user && user.email) {
    return new User(user.email, user.emailVerified);
  } else {
    console.log('user', user);
    throw new Error('Firebase return user without email');
  }
};

export const signUpWithEmailAndPassword = async (email, password) => {
  const userCredential = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);

  const user = userCredential;

  if (user && user.email) {
    return new User(user.email, user.emailVerified);
  } else {
    throw new Error('Firebase return user without email');
  }
};

export const sendPasswordResetEmail = async (email) => {
  await firebase.auth().sendPasswordResetEmail(email);
};

export const signOut = async () => {
  firebase.auth().signOut();
};
