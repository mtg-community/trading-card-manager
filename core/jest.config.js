module.exports = {
  displayName: 'DOMAIN',
  coverageDirectory: '<rootDir>/coverage/',
  testMatch: ['**/__tests__/*.test.js?(x)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
};
