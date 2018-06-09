const isProduction = process.env.NODE_ENV === 'production';
const isTestEnvironment = process.env.NODE_ENV === 'test';

const mockLogger = {
  warn: () => {},
  log: () => {},
};

export const Logger = isProduction || isTestEnvironment ? mockLogger : console;
