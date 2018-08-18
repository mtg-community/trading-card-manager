// @flow

const hasToShowLog = __DEV__ && process.env.NODE_ENV !== 'test';
const mockConsole = {
  warn: (message: Object | string, ...rest: Array<*>) => {},
  log: (message: Object | string, ...rest: Array<*>) => {},
};

type LogSubject = Object | string;

export class Logger {
  static stdout = hasToShowLog ? console : mockConsole;

  static warn = (message: LogSubject, ...rest: Array<?LogSubject>) => {
    Logger.stdout.warn(message, ...rest);
  };

  static log = (message: LogSubject, ...rest: Array<?LogSubject>) => {
    Logger.stdout.log(message, ...rest);
  };
}
