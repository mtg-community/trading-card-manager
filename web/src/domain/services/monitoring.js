import { identifyUser } from '../../data/log-rocket';

export const updateLoggedInUser = (user) => {
  identifyUser(user);
};
