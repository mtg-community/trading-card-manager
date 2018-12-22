"use strict";

const presets = ["@babel/preset-env", "@babel/preset-flow"];
const plugins = ["@babel/plugin-proposal-class-properties"];

module.exports = {
  ignore: ["node_modules"],
  presets,
  plugins
};
