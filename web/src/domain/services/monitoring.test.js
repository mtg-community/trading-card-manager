import * as LogRocket from '../../data/logRocket';
import { trackUser } from './monitoring';
import { User } from 'core';
jest.mock('../../data/log-rocket');

const user = new User('id', 'email@email.com');

describe('Monitoring', function() {
  it('does not call analytics when calling with null', function() {
    trackUser(null);

    expect(LogRocket.identifyUser).not.toHaveBeenCalled();
  });

  it('proxies the track call to LogRocket', function() {
    trackUser(user);

    expect(LogRocket.identifyUser).toHaveBeenCalledWith(user);
  });
});
