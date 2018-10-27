// @flow strict

import type { User as FirebaseUser } from 'react-native-firebase';

export class User {
  firebaseUser: FirebaseUser;

  constructor(firebaseUser: FirebaseUser) {
    this.firebaseUser = firebaseUser;
  }
}
