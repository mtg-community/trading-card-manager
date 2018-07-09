// @flow strict

const isProduction = process.env.NODE_ENV === 'production';
const isTestEnvironment = process.env.NODE_ENV === 'test';
const hasToShowLog = __DEV__ && process.env.NODE_ENV !== 'test';
const mockLogger = {
  warn: () => {},
  log: () => {},
};

export const warn = (message: string, ...rest: Array<*>) => {
  if (hasToShowLog) {
    console.warn(message, ...rest);
  }
};

export const log = (message: string, ...rest: Array<*>) => {
  if (hasToShowLog) {
    console.log(message, ...rest);
  }
};

export const Logger = isProduction || isTestEnvironment ? mockLogger : console;
