import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

// https://docs.logrocket.com/reference
const options = {
  release: 'ALPHA',
  network: {
    isEnabled: true,
  },
};

export const initializeLogRocket = () => {
  LogRocket.init(process.env.REACT_APP_LOG_ROCKET_PROJECT_ID, options);
  setupLogRocketReact(LogRocket);
};

// If you use other middlewares, LogRocket should be the final middleware:
export const logRocketMiddleware = () => LogRocket.reduxMiddleware();

export const identifyUser = user => {
  LogRocket.identify(user.id, user);
};

export const track = event => LogRocket.track(event);
