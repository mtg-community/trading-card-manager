module.exports = {
  displayName: 'DOMAIN',
  coverageDirectory: '<rootDir>/coverage/',
  testMatch: ['**/__tests__/*.test.(js|ts)?(x)'],
  collectCoverage: process.env.CI === true,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
};
