const fs = require('fs');
const getDevPaths = require('get-dev-paths');
const projectRoot = __dirname;

//https://github.com/facebook/metro/issues/1#issuecomment-421628147, you can also try an alternative solution -> // https://github.com/facebook/metro/issues/1#issuecomment-448064559
const watchFolders = Array.from(
  new Set(getDevPaths(projectRoot).map($ => fs.realpathSync($))),
);

module.exports = {
  watchFolders,
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};

console.log(JSON.stringify(watchFolders));
