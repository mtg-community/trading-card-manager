import { Email } from './email';

type optionalFields = {
  name: string,
  emailVerified: boolean,
};

const defaultOptionalFields = {
  name: '',
  emailVerified: false,
};

export const userMustHaveAnId = 'User must have an Id';

export class User {
  id: string;
  email: Email;
  emailVerified: boolean;
  name: string;

  constructor(
    id: string,
    email: string | Email,
    opt: optionalFields = defaultOptionalFields,
  ) {
    if (!id) {
      throw Error(userMustHaveAnId);
    }

    this.id = id;
    this.email = new Email(email.toString());

    this.emailVerified = opt.emailVerified;
    this.name = opt.name;
  }
}
