const mongoose = require('mongoose');
const Models = require('./models');

let instance = null;

const connect = () => {
  const db = mongoose.connect(process.env.MONGO_URL);
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    instance = db;
  });
  db.once('close', () => {
    instance = null;
  });

  return db;
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
