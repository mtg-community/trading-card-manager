const { CardModel } = require('../mongoose/models/card.model');

const ALL = {};

const upsert = async card => {
  const options = { upsert: true, new: true };
  const query = { uuid: card.uuid };
  return CardModel.findOneAndUpdate(query, card, options);
};

const findAll = async () => {
  return CardModel.find(ALL);
};

module.exports = {
  save: upsert,
  findAll,
};
