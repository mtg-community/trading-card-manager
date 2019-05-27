import { Email } from './email';

export type UserCredential = {
  additionalUserInfo: {
    isNewUser: boolean,
    providerId: string,
  },
  user: {
    email: Email | string,
    emailVerified: boolean,
  },
};
