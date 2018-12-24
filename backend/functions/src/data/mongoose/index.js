const mongoose = require('mongoose');
const Models = require('./models');

const connect = () => {
  const url = process.env.MONGO_URL;
  const options = { useNewUrlParser: true, useCreateIndex: true };
  mongoose.connect(url, options);
};

const parserOptions = {
  virtuals: true,
  getters: true,
  minimize: false,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  },
};

module.exports = { connect, parserOptions, Models };
