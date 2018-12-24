const CardRepository = require('../../data/repositories/card.repository');

const save = async (card) => {
  return CardRepository.save(card)
};

const findAll = async () => {
  return CardRepository.findAll();
};

module.exports = {
  save,
  findAll,
};
