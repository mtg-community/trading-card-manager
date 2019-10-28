import * as BugsnagCore from '@bugsnag/expo/dist/types/bugsnag-core';
import { User } from './entities';

export interface ErrorReporterParams<T> {
  ErrorBoundary: React.ReactType;
  Client: T;
}

type ClientType = BugsnagCore.Client;

export class ErrorReporter {
  static ErrorBoundary: React.ReactType;
  private static Client: ClientType;

  static init(params: ErrorReporterParams<ClientType>): void {
    ErrorReporter.ErrorBoundary = params.ErrorBoundary;
    ErrorReporter.Client = params.Client;
  }

  static report(error: Error): void {
    this.Client.notify(error);
  }

  static setCustomProperties(customProperties: object): void {
    this.Client.metaData = customProperties;
  }

  static identifyUser(user: User): void {
    this.Client.user = user;
  }

  static leaveBreadCrumbs(
    name: string,
    metaData?: object,
    type?: string,
    timestamp?: string,
  ): void {
    this.Client.leaveBreadcrumb(name, metaData, type, timestamp);
  }
}
