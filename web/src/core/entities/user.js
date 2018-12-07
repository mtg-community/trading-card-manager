// @flow strict

import { Email } from './email';

export class User {
  email: Email;
  emailVerified: boolean;

  constructor(email: string | Email, emailVerified?: boolean = false) {
    this.email = new Email(email.toString());
    this.emailVerified = emailVerified;
  }
}
