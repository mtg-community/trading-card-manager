const { CardModel } = require('../mongoose/models/card');

const save = async card => {
  return new CardModel(card).save();
};

module.exports = {
  save,
};
