const CardRepository = require('../../data/repositories/card.repository');

const save = async (card) => {
  return CardRepository.save(card)
};

module.exports = {
  save,
};
