const admin = require('firebase-admin');

const initialize = () => {
  admin.initializeApp();
};

module.exports = { initialize };
