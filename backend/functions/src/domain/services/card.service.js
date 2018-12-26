const CardRepository = require('../../data/repositories/card.repository');

const save = async card => {
  return CardRepository.save(card);
};

const findAll = async (page, pageSize) => {
  return CardRepository.findAll(page, pageSize);
};

// This method expects to receive https://mtgjson.com/json/AllCards.json
const saveAll = async allCards => {
  const promises = Object.values(allCards).map(card => save(card));
  const cards = await Promise.all(promises);
  return cards.map(card => card.uuid);
};

module.exports = {
  save,
  findAll,
  saveAll,
};
