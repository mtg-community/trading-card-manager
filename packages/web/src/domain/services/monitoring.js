import { identifyUser } from '../../data/logRocket';

export const trackUser = user => {
  if (user) {
    identifyUser(user);
  }
};
