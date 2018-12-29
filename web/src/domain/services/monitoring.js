import { identifyUser } from '../../data/log-rocket';

export const trackUser = (user) => {
  if (user) {
    identifyUser(user);
  }
};
