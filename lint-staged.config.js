module.exports = {
  linters: {
    '*.(js|jsx)': ['prettier --write', 'git add'],
  },
  ignore: ['**/package.json', '**/package-lock.json'],
};
