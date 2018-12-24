require('dotenv').config();
const Mongoose = require('./mongoose');
const FirebaseAdmin = require('./firebase/admin');

const initializeDataLayer = () => {
  FirebaseAdmin.initialize();
  Mongoose.connect();
};

module.exports = {
  initializeDataLayer,
};
