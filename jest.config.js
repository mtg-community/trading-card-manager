module.exports = {
  preset: 'react-native',
  coverageDirectory: '<rootDir>/coverage/',
  setupTestFrameworkScriptFile: '<rootDir>/src/__tests__/setup.js',
  testMatch: ['**/__tests__/**/*.test.js?(x)'],
  modulePaths: ['<rootDir>/'],
};
