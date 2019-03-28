module.exports = {
  linters: {
    '**/*.+(js|jsx|json|md)': ['prettier --write ', 'git add'],
  },
};
