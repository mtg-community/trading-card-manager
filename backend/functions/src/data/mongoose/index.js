const mongoose = require('mongoose');
const Models = require('./models');

const connect = () => {
  const url = process.env.MONGO_URL;
  const options = { useNewUrlParser: true, useCreateIndex: true };
  mongoose.connect(
    url,
    options,
  );
};

const parserOptions = {
  virtuals: true,
  getters: true,
  minimize: true,
};

module.exports = { connect, parserOptions, Models };
