// @flow strict

import { Email } from './email';

type optionalFields = {
  name: String,
  emailVerified: boolean,
};

export class User {
  id: String;
  email: Email;
  emailVerified: boolean;
  name: String;

  constructor(id: string, email: string | Email, opt: optionalFields = {}) {
    this.id = id;
    this.email = new Email(email.toString());

    this.emailVerified = opt.emailVerified || false;
    this.name = opt.name || "";

    if (!this.id) {
      throw Error('User must have an Id');
    }
  }
}
