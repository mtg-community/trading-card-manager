module.exports = {
  linters: {
    '*.(js|jsx|json|md)': ['eslint --fix', 'git add'],
  },
  ignore: ['**/package.json', '**/package-lock.json'],
};
