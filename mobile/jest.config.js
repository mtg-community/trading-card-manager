const { resolve } = require('path');
const root = resolve(__dirname, '..');

const mobileProject = {
  preset: 'react-native',
  displayName: 'MOBILE',
  transform: { '^.+\\.js$': '<rootDir>/jestPreprocess.js' },
  coverageDirectory: '<rootDir>/coverage/',
  setupTestFrameworkScriptFile: '<rootDir>/src/__tests__/setup.js',
  testMatch: ['**/__tests__/**/*.test.js?(x)'],
  modulePaths: ['<rootDir>/'],
};

const esLintProject = {
  cliOptions: {
    fix: true,
  },
  rootDir: root,
  displayName: 'ESLINT',
  runner: 'jest-runner-eslint',
  testMatch: ['**/__tests__/**/*.test.js?(x)'],
  watchPlugins: ['jest-runner-eslint/watch-fix'],
};

module.exports = {
  projects: [
    esLintProject,
    mobileProject,
    '<rootDir>/../domain/jest.config.js',
  ],
};

module.exports = mobileProject
