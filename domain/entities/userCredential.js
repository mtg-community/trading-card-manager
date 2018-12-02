// @flow strict

export type UserCredential = {
  additionalUserInfo: {
    isNewUser: boolean,
    providerId: string,
  },
  user: {
    email: string,
    emailVerified: boolean,
  },
};
