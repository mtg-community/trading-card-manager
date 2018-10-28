// @flow strict

import isEmail from 'validator/lib/isEmail';
import { User } from '../entities/user';

export const INVALID_EMAIL_ERROR = 'Invalid Email';

type UnsubscribeFunction = () => void;

export type AuthenticationService = {|
  signIn: (string, string) => Promise<User>,
  signUp: (string, string) => Promise<User>,
  signOut: () => Promise<void>,
  resetPassword: string => Promise<void>,
  authStateListener: ((?User) => void) => UnsubscribeFunction,
|};

export class AuthenticationInteractor {
  service: AuthenticationService;

  constructor(authenticationService: AuthenticationService) {
    this.service = authenticationService;
  }

  validateEmail(email: string) {
    if (!isEmail(email)) {
      throw new Error(INVALID_EMAIL_ERROR);
    }
  }

  async signIn(email: string, password: string): Promise<User> {
    this.validateEmail(email);
    return await this.service.signIn(email, password);
  }

  async signUp(email: string, password: string): Promise<User> {
    this.validateEmail(email);

    return await this.service.signUp(email, password);
  }

  async signOut(): Promise<void> {
    return this.service.signOut();
  }

  async forgotPassword(email: string): Promise<void> {
    this.validateEmail(email);

    return this.service.resetPassword(email);
  }

  onAuthStateChanged(callback: (?User) => void): UnsubscribeFunction {
    return this.service.authStateListener(callback);
  }
}
