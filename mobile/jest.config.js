const mobileProject = {
  preset: 'react-native',
  displayName: 'MOBILE',
  transform: { '^.+\\.js$': '<rootDir>/jestPreprocess.js' },
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverage: process.env.CI === true,
  setupTestFrameworkScriptFile: '<rootDir>/src/__tests__/setup.js',
  testMatch: ['**/__tests__/**/*.test.js?(x)'],
  modulePaths: ['<rootDir>/'],
};

module.exports = mobileProject;
