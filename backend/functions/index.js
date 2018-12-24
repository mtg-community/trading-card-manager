const functions = require('firebase-functions');

const { initializeDataLayer } = require('./src/data');
const { initializePresentationLayer } = require('./src/presentation');

initializeDataLayer();
const Presentation = initializePresentationLayer();

module.exports = {
  api: functions.https.onRequest(Presentation.api),
};
