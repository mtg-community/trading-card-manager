// @flow strict

export class User {
  email: ?string;
  emailVerified: ?boolean;

  constructor(email: ?string, emailVerified: ?boolean) {
    this.email = email;
    this.emailVerified = emailVerified;
  }
}
