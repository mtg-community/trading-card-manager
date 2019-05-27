import { User, userMustHaveAnId } from '../user';

describe('User domain', function() {
  it('throws an error when initialized without an ID', function() {
    expect(() => new User(null, 'email@email.com')).toThrowError(
      userMustHaveAnId,
    );
  });
});
