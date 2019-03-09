// @flow strict

import { Email } from './email';

type optionalFields = {
  name: string,
  emailVerified: boolean,
};

const defaultOptionalFields = {
  name: '',
  emailVerified: false,
};

export class User {
  id: string;
  email: Email;
  emailVerified: boolean;
  name: string;

  constructor(id: string, email: string | Email, opt: optionalFields = defaultOptionalFields) {
    this.id = id;
    this.email = new Email(email.toString());

    this.emailVerified = opt.emailVerified;
    this.name = opt.name;

    if (!this.id) {
      throw Error('User must have an Id');
    }
  }
}
