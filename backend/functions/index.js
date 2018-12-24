//@flow

const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const { initializeDataLayer } = require('./src/data');
const api = require('./src/api');

initializeDataLayer();

module.exports = {
  api: functions.https.onRequest(api),
};
