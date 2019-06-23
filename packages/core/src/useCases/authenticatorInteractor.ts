import { User } from '../entities';
const isEmail: (email: string) => boolean = require('validator/lib/isEmail');

export const INVALID_EMAIL_ERROR = 'Invalid Email';

export interface AuthenticationService {
  signIn: (email: string, password: string) => Promise<User>;
  signUp: (email: string, password: string) => Promise<User>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const validateEmail = (email: string) => {
  if (!isEmail(email)) {
    throw new Error(INVALID_EMAIL_ERROR);
  }
};

export interface IAuthenticationInteractor {
  service: AuthenticationService;
  signIn(email: string, password: string): Promise<User>;
  signUp(email: string, password: string): Promise<User>;
  signOut(): Promise<void>;
  forgotPassword(email: string): Promise<void>;
}

export class AuthenticationInteractor implements IAuthenticationInteractor {
  service: AuthenticationService;

  constructor(authenticationService: AuthenticationService) {
    this.service = authenticationService;
  }

  async signIn(email: string, password: string): Promise<User> {
    validateEmail(email);
    return this.service.signIn(email, password);
  }

  async signUp(email: string, password: string): Promise<User> {
    validateEmail(email);
    return this.service.signUp(email, password);
  }

  async signOut(): Promise<void> {
    return this.service.signOut();
  }

  async forgotPassword(email: string): Promise<void> {
    validateEmail(email);
    return this.service.resetPassword(email);
  }
}
