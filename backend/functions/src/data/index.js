require('dotenv').config();
const FirebaseAdmin = require('./firebase/admin');

const initializeDataLayer = () => {
  FirebaseAdmin.initialize();
};

module.exports = {
  initializeDataLayer,
};
