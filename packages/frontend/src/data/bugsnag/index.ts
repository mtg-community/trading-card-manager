import bugsnag from '@bugsnag/expo';
import { BUGSNAG_API_KEY } from 'react-native-dotenv';
import * as BugsnagCore from '@bugsnag/expo/dist/types/bugsnag-core';
import { ErrorReporterParams } from '../../domain/ErrorReporter';

export class BugSnag implements ErrorReporterParams<BugsnagCore.Client> {
  ErrorBoundary: React.ReactType;
  Client: BugsnagCore.Client;

  constructor(Client: BugsnagCore.Client, ErrorBoundary: React.ReactType) {
    this.ErrorBoundary = ErrorBoundary;
    this.Client = Client;
  }
}

export function initBugSnag(): BugSnag {
  const bugSnagClient = bugsnag(BUGSNAG_API_KEY);
  const errorBoundary = bugSnagClient.getPlugin('react');
  console.log(errorBoundary)
  return new BugSnag(bugSnagClient, errorBoundary);
}
