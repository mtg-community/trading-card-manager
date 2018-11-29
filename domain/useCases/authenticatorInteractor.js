// @flow strict

import isEmail from 'validator/lib/isEmail';
import { User } from '../entities/user';

export const INVALID_EMAIL_ERROR = 'Invalid Email';

type UnsubscribeFunction = () => void;

export type AuthenticationService = {|
  signIn: (string, string, (Error) => void) => Promise<User>,
  signUp: (string, string, (Error) => void) => Promise<User>,
  signOut: ((Error) => void) => Promise<void>,
  resetPassword: (string, (Error) => void) => Promise<void>,
  authStateListener: ((?User) => void) => UnsubscribeFunction,
|};

const validateEmail = (email: string) => {
  if (!isEmail(email)) {
    throw new Error(INVALID_EMAIL_ERROR);
  }
};

export class AuthenticationInteractor {
  service: AuthenticationService;

  constructor(authenticationService: AuthenticationService) {
    this.service = authenticationService;
  }

  signIn = async (email: string, password: string): Promise<User> => {
    validateEmail(email);
    return this.service.signIn(email, password);
  };

  signUp = async (email: string, password: string): Promise<User> => {
    validateEmail(email);
    return this.service.signUp(email, password);
  };

  signOut = async (): Promise<void> => this.service.signOut();

  forgotPassword = async (email: string): Promise<void> => {
    validateEmail(email);
    return this.service.resetPassword(email);
  };

  onAuthStateChanged = (callback: (?User) => void): UnsubscribeFunction =>
    this.service.authStateListener(callback);
}
