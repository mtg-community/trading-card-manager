import bugsnag from '@bugsnag/expo';
import { BUGSNAG_API_KEY } from 'react-native-dotenv';

export const bugsnagClient = bugsnag(BUGSNAG_API_KEY);

type BugSnagInit = {
  ErrorBoundary: React.ReactType;
};

export function initBugSnag(): BugSnagInit {
  return {
    ErrorBoundary: bugsnagClient.getPlugin('react'),
  };
}
