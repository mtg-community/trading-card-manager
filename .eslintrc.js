module.exports = {
  plugins: ['prettier', 'flowtype'],
  extends: ['prettier', 'plugin:flowtype/recommended'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': 'error',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
};
