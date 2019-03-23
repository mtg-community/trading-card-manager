const babelOptions = {
  presets: ['module:metro-react-native-babel-preset'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
