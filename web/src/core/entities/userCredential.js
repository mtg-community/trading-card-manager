// @flow strict

import { Email } from './email';

export class UserCredential {
  additionalUserInfo: {
    isNewUser: boolean,
    providerId: string,
  };
  user: {
    email: Email | string,
    emailVerified: boolean,
  };
}
