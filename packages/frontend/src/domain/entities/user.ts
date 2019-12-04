import { Email } from './email';

type optionalFields = {
  name?: string;
  emailVerified: boolean;
  email?: Email | string;
};

const defaultOptionalFields = {
  name: '',
  emailVerified: false,
  email: new Email('unknown@user.io'),
};

export const userMustHaveAnId = 'User must have an Id';

export class User {
  id: string;
  email?: Email | string | undefined;
  emailVerified: boolean;
  name?: string;

  constructor(id: string, opt: optionalFields = defaultOptionalFields) {
    if (!id) {
      throw Error(userMustHaveAnId);
    }

    this.id = id;
    this.email = opt.email;
    this.emailVerified = opt.emailVerified;
    this.name = opt.name;
  }
}

export const NOT_LOGGED_IN_USER = new User('unknown');
