const mobileProject = {
  preset: 'react-native',
  displayName: 'MOBILE',
  transform: { '^.+\\.(js|ts|tsx)$': '<rootDir>/jestPreprocess.js' },
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverage: process.env.CI === true,
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.js'],
  testMatch: ['**/__tests__/**/*.test.js?(x)'],
  modulePaths: ['<rootDir>/', '<rootDir>/src'],
  transformIgnorePatterns: [
    // 'node_modules/(?!(core)/)',
    // 'node_modules/react-native/jest/',
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element)',
  ],
};

module.exports = mobileProject;
