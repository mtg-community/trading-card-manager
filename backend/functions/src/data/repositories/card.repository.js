const { CardModel } = require('../mongoose/models/card.model');

const ALL = {};

const save = async card => {
  return new CardModel(card).save();
};

const findAll = async () => {
  return CardModel.find(ALL);
};

module.exports = {
  save,
  findAll,
};
