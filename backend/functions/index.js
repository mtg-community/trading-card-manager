//@flow

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const api = require('./src/api');

admin.initializeApp();

module.exports = {
  api: functions.https.onRequest(api),
};
