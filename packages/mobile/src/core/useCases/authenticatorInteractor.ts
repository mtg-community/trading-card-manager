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
}
