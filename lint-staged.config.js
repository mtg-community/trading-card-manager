module.exports = {
  linters: {
    '*.(js|jsx|ts|tsx)': ['prettier --write', 'git add'],
  },
  ignore: ['**/package.json', '**/package-lock.json'],
};
