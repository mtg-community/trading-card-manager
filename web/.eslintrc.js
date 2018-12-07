const rootConfig = require('../.eslintrc');

module.exports = {
  ...rootConfig,
  extends: rootConfig.extends.concat(["react-app"]),
};
