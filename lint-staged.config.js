module.exports = {
  linters: {
    '*.(js|jsx|json)': ['eslint --fix', 'git add'],
  },
  ignore: ['**/package.json', '**/package-lock.json'],
};
