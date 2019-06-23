const functions = require('firebase-functions');

const { initializeDataLayer } = require('./src/data');
const { initializePresentationLayer } = require('./src/presentation');

initializeDataLayer();
const { rest, graphql } = initializePresentationLayer();

module.exports = {
  rest: functions.https.onRequest(rest),
  graphql: functions.https.onRequest(graphql),
};
