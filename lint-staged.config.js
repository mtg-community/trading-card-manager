module.exports = {
  linters: {
    '*.(js|jsx)': ['prettier --write', 'git add'],
    '*.(ts|tsx)': ['prettier --parser typescript --write', 'git add'],
  },
  ignore: ['**/package.json', '**/package-lock.json'],
};
