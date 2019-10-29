const mongoose = require('mongoose');
const Models = require('./models');

const connect = () => {
  const url = process.env.MONGO_URL;
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };
  if (!url) {
    console.log("MONGO_URL is missing, the app will not be able to connect to the Database");
    return;
  }

  mongoose.connect(url, options);
};

const parserOptions = {
  virtuals: true,
  getters: true,
  minimize: true,
};

module.exports = { connect, parserOptions, Models };
