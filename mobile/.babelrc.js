const { resolve } = require('path');

const include = [
  resolve(__dirname, "src"),
  resolve(__dirname, "node_modules/core"),
  resolve(__dirname, "../core"),
];

module.exports = {
  presets: [['react-native', { include }], 'flow'],
};
