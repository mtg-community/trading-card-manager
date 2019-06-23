module.exports = {
  displayName: 'DOMAIN',
  coverageDirectory: '<rootDir>/coverage/',
  testMatch: ['**/__tests__/*.test.(js|ts)?(x)'],
  collectCoverage: process.env.CI === true,
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
};
