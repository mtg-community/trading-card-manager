import bugsnag from '@bugsnag/expo';
import { BUGSNAG_API_KEY } from 'react-native-dotenv';

export const bugsnagClient = bugsnag(BUGSNAG_API_KEY);
export const ErrorBoundary = bugsnagClient.getPlugin('react')
