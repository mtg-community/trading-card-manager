const express = require('./rest/express');
const yogaGraphql = require('./graphql/yoga');

const initializePresentationLayer = () => {
  return { rest: express, graphql: yogaGraphql };
};

module.exports = {
  initializePresentationLayer,
};
